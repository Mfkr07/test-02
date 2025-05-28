const data = {
    Intel: {
      sockets: [
        { name: "LGA1700", price: 500000 }
      ],
      processors: {
        "LGA1700": [
          { name: "Intel Core i5-12400", price: 2800000 },
          { name: "Intel Core i7-12700", price: 4500000 }
        ]
      }
    },
    AMD: {
      sockets: [
        { name: "AM4", price: 400000 }
      ],
      processors: {
        "AM4": [
          { name: "AMD Ryzen 5 5600X", price: 2700000 },
          { name: "AMD Ryzen 7 5800X", price: 4300000 }
        ]
      }
    }
  };
  
  function updateSocketOptions() {
    const brand = document.getElementById('brand').value;
    const socketSelect = document.getElementById('socket');
  
    socketSelect.innerHTML = '<option value="">-- Pilih Socket --</option>';
  
    if (brand && data[brand]) {
      data[brand].sockets.forEach(socket => {
        const option = document.createElement('option');
        option.value = socket.name; // Value socket pakai nama socket
        option.textContent = `${socket.name} (Rp${socket.price.toLocaleString()})`;
        socketSelect.appendChild(option);
      });
    }
  }
  
  function resetProcessorOptions() {
    const processorSelect = document.getElementById('processor');
    processorSelect.innerHTML = '<option value="">-- Pilih Processor --</option>';
  }
  
  function updateProcessorOptions() {
    const brand = document.getElementById('brand').value;
    const socket = document.getElementById('socket').value;
    const processorSelect = document.getElementById('processor');
  
    processorSelect.innerHTML = '<option value="">-- Pilih Processor --</option>';
  
    if (brand && socket && data[brand] && data[brand].processors[socket]) {
      data[brand].processors[socket].forEach(proc => {
        const option = document.createElement('option');
        option.value = proc.price;
        option.textContent = `${proc.name} (Rp${proc.price.toLocaleString()})`;
        processorSelect.appendChild(option);
      });
    }
  }
  
  function hitungTotal() {
    const motherboard = parseInt(document.getElementById('motherboard')?.value) || 0;
    const ram = parseInt(document.getElementById('ram')?.value) || 0;
    const processor = parseInt(document.getElementById('processor')?.value) || 0;
    const brand = document.getElementById('brand').value;
    const socket = document.getElementById('socket').value;
    
    let socketPrice = 0;
    if (brand && socket && data[brand]) {
      const foundSocket = data[brand].sockets.find(s => s.name === socket);
      if (foundSocket) {
        socketPrice = foundSocket.price;
      }
    }
  
    const total = motherboard + ram + processor + socketPrice;
    document.getElementById('totalHarga').textContent = formatRupiah(total);
  }
  
  function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(angka);
  }
  