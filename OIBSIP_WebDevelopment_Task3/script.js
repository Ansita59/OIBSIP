        function validateInput(value) {
            return !isNaN(value) && value !== '' && isFinite(value);
        }

        function convertTemperature() {
            const input = document.getElementById('temperature');
            const value = parseFloat(input.value);
            const unit = document.querySelector('input[name="unit"]:checked').value;
            const result = document.getElementById('result');
            const resultText = document.getElementById('resultText');
            const errorMessage = document.getElementById('errorMessage');

            // Clear previous error states
            input.classList.remove('error');
            errorMessage.classList.remove('show');

            // Validate input
            if (!validateInput(input.value)) {
                input.classList.add('error');
                errorMessage.classList.add('show');
                result.classList.remove('show');
                return;
            }

            // Perform conversions
            let celsius, fahrenheit, kelvin;

            switch(unit) {
                case 'celsius':
                    celsius = value;
                    fahrenheit = (celsius * 9/5) + 32;
                    kelvin = celsius + 273.15;
                    break;
                case 'fahrenheit':
                    fahrenheit = value;
                    celsius = (fahrenheit - 32) * 5/9;
                    kelvin = celsius + 273.15;
                    break;
                case 'kelvin':
                    kelvin = value;
                    celsius = kelvin - 273.15;
                    fahrenheit = (celsius * 9/5) + 32;
                    break;
            }

            // Format results to 2 decimal places
            const formatTemp = (temp) => Math.round(temp * 100) / 100;

            // Display results
            const inputUnit = unit.charAt(0).toUpperCase() + unit.slice(1);
            const inputSymbol = unit === 'celsius' ? '°C' : unit === 'fahrenheit' ? '°F' : 'K';
            
            resultText.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <strong>${value}${inputSymbol}</strong> converts to:
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div><strong>${formatTemp(celsius)}°C</strong> (Celsius)</div>
                    <div><strong>${formatTemp(fahrenheit)}°F</strong> (Fahrenheit)</div>
                    <div><strong>${formatTemp(kelvin)}K</strong> (Kelvin)</div>
                </div>
            `;

            result.classList.add('show');
        }

        // Allow Enter key to trigger conversion
        document.getElementById('temperature').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                convertTemperature();
            }
        });

        // Clear error on input
        document.getElementById('temperature').addEventListener('input', function() {
            this.classList.remove('error');
            document.getElementById('errorMessage').classList.remove('show');
        });
