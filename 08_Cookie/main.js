const colors = []; 

        function addCard() {
            const colorName = document.getElementById("colorName").value.trim();
            const colorType = document.getElementById("colorType").value;
            const colorCode = document.getElementById("colorCode").value.trim();
            const nameError = document.getElementById("nameError");
            const codeError = document.getElementById("codeError");

            
            nameError.textContent = "";
            codeError.textContent = "";

            if (!colorName.match(/^[a-zA-Z]+$/)) {
                nameError.textContent = "Name must contain only letters.";
                return;
            }
            if (colors.includes(colorName.toLowerCase())) {
                nameError.textContent = "This color name already exists.";
                return;
            }

            if (colorType === "RGB" && !colorCode.match(/^rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)$/)) {
                codeError.textContent = "Invalid RGB format. Use rgb(255, 255, 255).";
                return;
            }
            if (colorType === "RGBA" && !colorCode.match(/^rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?([01]|0?\.\d+)\)$/)) {
                codeError.textContent = "Invalid RGBA format. Use rgba(255, 255, 255, 1).";
                return;
            }
            if (colorType === "HEX" && !colorCode.match(/^#[0-9a-fA-F]{6}$/)) {
                codeError.textContent = "Invalid HEX format. Use #RRGGBB.";
                return;
            }

            
            colors.push(colorName.toLowerCase());
            const cards = document.getElementById("cards");
            const card = `
                <div class="color-card" style="
                background-color: ${colorCode}; 
                height:200px; 
                border-radius: 20px;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin: 20px;
               ">
                    <strong>${colorName}</strong><br>${colorType}: ${colorCode}
                </div>`;
            cards.innerHTML += card;

           
            document.getElementById("colorForm");
            setCookie(colorName, `${colorType}:${colorCode}`, 3);
    document.getElementById("colorName").value = "";
    document.getElementById("colorCode").value = "";
        }
        function setCookie(name, value, days) {
            const nowDate = new Date();
            nowDate.setDate(nowDate.getDate() + days);
            document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${nowDate.toUTCString()}; path=/`;
    
        }