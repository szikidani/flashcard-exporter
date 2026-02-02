// Automatikusan induljon amikor megnyílik a popup
document.addEventListener('DOMContentLoaded', async () => {
  const btn = document.getElementById('exportBtn');
  const status = document.getElementById('status');
  
  btn.disabled = true;
  btn.textContent = 'Folyamatban...';
  status.className = 'progress';
  status.textContent = '⏳ Görgetés és gyűjtés...';
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: async () => {
        return new Promise((resolve) => {
          const results = new Set();
          const container = document.querySelector('.rdg');
          
          if (!container) {
            resolve({ error: 'Nem találom a kártya listát! Nyisd meg a Cards nézetet.' });
            return;
          }
          
          let lastHeight = 0;
          
          async function scrollAndCollect() {
            // Először ugorjunk a tetejére
            container.scrollTop = 0;
            await new Promise(r => setTimeout(r, 300));
            
            while(true) {
              document.querySelectorAll('.rdg-row.aa-grid-row').forEach(function(row) {
                const cells = row.querySelectorAll('.rdg-cell');
                if (cells.length >= 2) {
                  const front = cells[0].querySelector('.field');
                  const back = cells[1].querySelector('.field');
                  if (front && back) {
                    const f = front.textContent.trim();
                    const b = back.textContent.trim();
                    if (f && b && f.indexOf('Enter text') === -1) {
                      results.add(f + ',' + b);
                    }
                  }
                }
              });
              
              container.scrollTop += 300;
              await new Promise(r => setTimeout(r, 100));
              
              if (container.scrollTop === lastHeight) break;
              lastHeight = container.scrollTop;
            }
            
            const output = [...results].join('\n');
            
            // Vágólapra másolás
            try {
              await navigator.clipboard.writeText(output);
            } catch(e) {
              // Ha nem sikerül, textarea-val próbálkozunk
              const textarea = document.createElement('textarea');
              textarea.value = output;
              document.body.appendChild(textarea);
              textarea.select();
              document.execCommand('copy');
              document.body.removeChild(textarea);
            }
            
            resolve({ count: results.size, data: output });
          }
          
          scrollAndCollect();
        });
      }
    });
    
    const result = results[0].result;
    
    if (result.error) {
      status.className = 'error';
      status.textContent = '❌ ' + result.error;
    } else {
      status.className = 'success';
      status.textContent = '✅ ' + result.count + ' kártya vágólapra másolva!';
      btn.textContent = 'Kész!';
    }
    
  } catch (error) {
    status.className = 'error';
    status.textContent = '❌ Hiba: ' + error.message;
    btn.disabled = false;
    btn.textContent = 'Újrapróbálás';
  }
});
