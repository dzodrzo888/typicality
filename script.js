document.addEventListener("DOMContentLoaded", function () { 
    jatos.onLoad(function() {
    
        //Start of the study - personal information page
        document.querySelector('#main-container').style.display = 'none';
        document.querySelector('#first-screen').style.display = 'flex';
        
        let countries = [" ", "Abcházie","Afghánistán","Alandy (Finsko)","Albánie","Alžírsko","Americká Samoa (USA)","Americké Panenské ostrovy (USA)","Andorra","Angola","Anguilla (Velká Británie)","Antigua a Barbuda","Argentina","Arménie","Aruba (Nizozemsko)","Austrálie","Ázerbájdžán","Bahamy","Bahrajn","Bangladéš","Barbados","Belgie","Belize","Bělorusko","Benin","Bermudy (Velká Británie)","Bhútán","Bolívie","Bosna a Hercegovina","Botswana","Brazílie","Britské Panenské ostrovy (Velká Británie)","Brunej","Bulharsko","Burkina Faso","Burundi","Čad","Černá Hora","Česko","Chile","Chorvatsko","Čína","Cookovy ostrovy (Nový Zéland)","Curaçao (Nizozemsko)","Dánsko","Dominika","Dominikánská republika","Džibutsko","Egypt","Ekvádor","Eritrea","Estonsko","Etiopie","Faerské ostrovy (Dánsko)","Falklandy (Velká Británie)","Fidži","Filipíny","Finsko","Francie","Francouzská Guyana (Francie)","Francouzská Polynésie (Francie)","Gabon","Gambie","Ghana","Gibraltar (Velká Británie)","Grenada","Grónsko (Dánsko)","Gruzie","Guadeloupe (Francie)","Guam (USA)","Guatemala","Guernsey (Velká Británie)","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hongkong (Čína)","Indie","Indonésie","Irák","Írán","Irsko","Island","Itálie","Izrael","Jamajka","Japonsko","Jemen","Jersey (Velká Británie)","Jižní Afrika","Jižní Korea","Jižní Osetie","Jižní Súdán","Jordánsko","Kajmanské ostrovy (Velká Británie)","Kambodža","Kamerun","Kanada","Kapverdy","Karibské Nizozemsko (Nizozemsko)","Katar","Kazachstán","Keňa","Kiribati","Kokosové ostrovy (Austrálie)","Kolumbie","Komory","Konžská demokratická republika","Konžská republika","Kosovo","Kostarika","Kuba","Kuvajt","Kypr","Kyrgyzstán","Laos","Lesotho","Libanon","Libérie","Libye","Lichtenštejnsko","Litva","Lotyšsko","Lucembursko","Macao (Čína)","Madagaskar","Maďarsko","Malajsie","Malawi","Maledivy","Mali","Malta","Man (Velká Británie)","Maroko","Marshallovy ostrovy","Martinik (Francie)","Mauricius","Mauritánie","Mayotte (Francie)","Mexiko","Mikronésie","Moldavsko","Monako","Mongolsko","Montserrat (Velká Británie)","Mosambik","Myanmar (Barma)","Namibie","Nauru","Německo","Nepál","Niger","Nigérie","Nikaragua","Niue (Nový Zéland)","Nizozemsko","Norfolk (Austrálie)","Norsko","Nová Kaledonie (Francie)","Nový Zéland","Omán","Pákistán","Palau","Palestinská autonomie","Panama","Papua Nová Guinea","Paraguay","Peru","Pitcairnovy ostrovy (Velká Británie)","Pobřeží slonoviny","Polsko","Portoriko (USA)","Portugalsko","Rakousko","Řecko","Réunion (Francie)","Rovníková Guinea","Rumunsko","Rusko","Rwanda","Saint Pierre a Miquelon (Francie)","Šalomounovy ostrovy","Salvador","Samoa","San Marino","Saúdská Arábie","Senegal","Severní Korea","Severní Makedonie","Severní Mariany (USA)","Seychely","Sierra Leone","Singapur","Slovensko","Slovinsko","Somálsko","Španělsko","Špicberky a Jan Mayen (Norsko)","Spojené arabské emiráty","Spojené království","Spojené státy americké","Srbsko","Srí Lanka","Středoafrická republika","Súdán","Surinam","Svatá Helena, Ascension a Tristan da Cunha (Velká Británie)","Svatá Lucie","Svatý Bartoloměj (Francie)","Svatý Kryštof a Nevis","Svatý Martin (francouzská část) (Francie)","Svatý Martin (nizozemská část) (Nizozemsko)","Svatý Tomáš a Princův ostrov","Svatý Vincenc a Grenadiny","Svazijsko","Švédsko","Švýcarsko","Sýrie","Tádžikistán","Tanzanie","Tchaj-wan","Thajsko","Togo","Tokelau (Nový Zéland)","Tonga","Trinidad a Tobago","Tunisko","Turecko","Turkmenistán","Turks a Caicos (Velká Británie)","Tuvalu","Uganda","Ukrajina","Uruguay","Uzbekistán","Vánoční ostrov (Austrálie)","Vanuatu","Vatikán","Venezuela","Vietnam","Východní Timor","Wallis a Futuna (Francie)","Zambie","Západní Sahara","Zimbabwe"]
        let select = document.getElementById('zeme');

        for(let i = 0; i < countries.length; i++) {
            let option = document.createElement('option');
            option.value = countries[i];
            option.text = countries[i];
            select.appendChild(option);
        }

        document.getElementById('start-button').addEventListener('click', instructions_shower);

        // Main-container - Image shower part
        let index = 0;
        let new_dict = jatos.componentJsonInput;
        let rating_container = document.createElement('div');
        let vekValue = document.getElementById('vek').value;
        let zemeValue = document.getElementById('zeme').value;
        let container = document.getElementById('main-container'); // Get the div
        final_values = {}
        final_values['vek'] = vekValue;
        final_values['zeme'] = zemeValue;
        let kategories = new_dict["kategorie"]
        let images_select = new_dict["obrázky"]
        let category = get_category(images_select);
        let selected_descriptions = selectDescriptions(kategories, category, 3);
        
        function instructions_shower() {
        console.log(selected_descriptions)
        let instrukce_div = document.querySelector('#instrukce_div')
        let instructions = document.createElement('div');
        instructions.id = "instructions"
        instrukce_div.appendChild(instructions)
        instructions.innerHTML = 'Zde uvidíte několik kategorií dle kterých budete hodnotit obrázky. Každá kategorie má svůj popis, který vám pomůže při hodnocení. Po přečtení jednotlivých popisů stiskněte tlačítko "Začít výzkum" a začněte hodnotit obrázky.';
        instructions.classList.add('container');
        instructions.classList.add('container-style')
        let list = document.createElement('ul');
        let descriptions = selected_descriptions;
        for (let i = 0; i<descriptions.length; i++) {
            let description = descriptions[i];
            let label = document.createElement('label');
            let description_category = description['category'];
            description_category = description_category.charAt(0).toUpperCase() + description_category.slice(1, -1);

            let span = document.createElement('span');
            span.classList.add('category_type');
            span.textContent = description_category;

            label.appendChild(span);
            label.innerHTML += ': ' + description['description'];

            let listItem = document.createElement('li'); // Create a li element
            listItem.appendChild(label); // Append the label to the li element
            list.appendChild(listItem); // Append the li element to the ul element
        }

        instructions.appendChild(list); // Append the ul element to the instructions
        let instructions_button = document.createElement('button');
        instructions_button.innerHTML = 'Začít výzkum';
        instructions_button.id = 'instructions-button';
        instructions_button.classList.add('btn');
        instructions.appendChild(instructions_button);
        document.getElementById('instructions-button').addEventListener('click', main_shower);
        document.querySelector('#first-screen').style.display = 'none';
        }
        
        function main_shower() {    
        document.querySelector('#main-container').style.display = 'flex';
        document.querySelector('#instructions').style.display = 'none';
        let progressBar = document.getElementById('progressBar');
        let progressText = document.getElementById('progressText');
        let hodnoceni = document.createElement('span');
        let images_select = new_dict["obrázky"]
        let category = get_category(images_select);
        let number_of_images = 180
        let selected_images = selectFromAll(images_select, number_of_images, category);
        index = 0;
        image_slider(selected_images, category, index);
        
        function updateProgressBar(currentIndex, progressBar) {
            let progress = (currentIndex / number_of_images) * 100;
            progressBar.style.width = progress + '%';
            progressText.textContent = progress.toFixed(0) + '%';
        }

        function image_slider(image_array, category, index) {


            hodnoceni.id = 'nadpisy'
            hodnoceni.innerHTML = '<h2>Hodnocení obrázků<h2>';
            container.appendChild(hodnoceni);

            rating_container.id = 'rating_container';
            container.appendChild(rating_container);
            let bigsliderDiv = document.createElement('div');
            rating_container.appendChild(bigsliderDiv);
            rating_container.classList.add('container');
            rating_container.classList.add('container-style')
            let path = category + '/';
            let image_container = document.createElement('div');
            let imgElement = document.createElement('img');
            let image = image_array[index].image;
            console.log(path + image)
            imgElement.src = path + image; 
            imgElement.width = 700;  
            imgElement.height = 600; 
            image_container.appendChild(imgElement);
            rating_container.appendChild(image_container);

            for (let i = 0; i<selected_descriptions.length; i++) {
            let label_container = document.createElement('div');
            label_container.id = 'label_container';
            bigsliderDiv.appendChild(label_container);
            let description = selected_descriptions[i];
            let description_category = description['category'];
            description_category = description_category.charAt(0).toUpperCase() + description_category.slice(1, -1);
            let sliderLabel = document.createElement('label');
            let span = document.createElement('span');
            span.classList.add('category_type');
            span.textContent = description_category;
            sliderLabel.appendChild(span);
            label_container.appendChild(sliderLabel);

            // Create a div to hold the slider and the value
            let sliderDiv = document.createElement('div');
            sliderDiv.style.position = 'relative';
            sliderDiv.className = 'sliderDiv';
            bigsliderDiv.appendChild(sliderDiv);

            // Create a range input (slider)
            let slider = document.createElement('input');
            slider.type = 'range';
            slider.min = 0;
            slider.max = 100;
            slider.step = 1; // Set the step to 1
            slider.value = 50; // Set the initial value
            slider.style.width = '500px'; // Set the width to 100%
            slider.style.height = '50px'; // Set the height to 25px
            sliderDiv.appendChild(slider); // Append to the sliderDiv

            // Create a div to display the current value
            let valueDiv = document.createElement('div');
            valueDiv.innerHTML = slider.value; // Set the initial value
            valueDiv.id = 'valueDiv'
            sliderDiv.appendChild(valueDiv); // Append to the sliderDiv

            // Create divs to display the starting and ending values
            let startDiv = document.createElement('div');
            startDiv.innerHTML = slider.min; // Set the initial value
            startDiv.id = 'startDiv'
            sliderDiv.appendChild(startDiv); // Append to the sliderDiv

            let endDiv = document.createElement('div');
            endDiv.innerHTML = slider.max; // Set the initial value
            endDiv.id = 'endDiv'
            sliderDiv.appendChild(endDiv); // Append to the sliderDiv

            // Update the div when the slider value changes
            slider.oninput = function() {
                valueDiv.innerHTML = this.value;
                let percent = this.value / this.max; // Calculate the percentage
                valueDiv.style.left = (percent * 100) + '%'; // Update the horizontal position
                valueDiv.style.transform = 'translateX(-' + (percent * 100) + '%)'; // Adjust the horizontal position
                if (!final_values[image]) {
                    final_values[image] = {};
                }
                final_values[image][description_category] = this.value;
                console.log(final_values)
            }
            if (!final_values[image]) {
                final_values[image] = {};
            }
            final_values[image][description_category] = valueDiv.innerHTML;
            console.log(final_values)
            }
            
            let button_div = document.createElement('div');
            button_div.id = 'button_div';
            container.appendChild(button_div);
            
            if (index > 0) {
                let prevButton = document.createElement('button');
                prevButton.innerHTML = 'Předchozí obrázek';
                prevButton.id = 'prevButton';
                prevButton.classList.add('btn');
                button_div.appendChild(prevButton);
    
                document.querySelector('#prevButton').onclick = function() {
                rating_container.innerHTML = '';
                button_div.innerHTML = '';
                jatos.appendResultData(final_values);
                console.log(final_values)
                index --;
                image_slider(selected_images, category, index);
                updateProgressBar(index, progressBar);
            };
            } 

            if (index < selected_images.length - 1) {
                let nextButton = document.createElement('button');
                nextButton.innerHTML = 'Další obrázek';
                nextButton.id = 'nextButton';
                nextButton.classList.add('btn');
                button_div.appendChild(nextButton);
        
                document.querySelector('#nextButton').onclick = function() {
                    rating_container.innerHTML = '';
                    button_div.innerHTML = '';
                    jatos.appendResultData(final_values);
                    console.log(final_values)
                    index ++;
                    image_slider(selected_images, category, index);
                    updateProgressBar(index, progressBar);
                };
                }
        
                if (index == selected_images.length - 1) {
                    let submitButton = document.createElement('button');
                    submitButton.innerHTML = 'Odevzdejte výseledky';
                    submitButton.id = 'submitButton';
                    submitButton.classList.add('btn');
                    button_div.appendChild(submitButton);
                    submitButton.onclick = function() {
                        document.querySelector('#main-container').style.display = 'none';
                        let endScreen = document.createElement('div');
                        endScreen.innerHTML = JSON.stringify(final_values); // Your end screen message
                        document.body.appendChild(endScreen);
                        setTimeout(function() {
                            jatos.endStudy();
                        }, 5000);
                    };
                    }
        }; 
         
    };
    });   

    function selectFromAll(images, numImages, category) {
        let categoryImages = images[category];
        let selectedImages = [];
        for(let i = 0; i < numImages; i++){
            let index = Math.floor(Math.random() * categoryImages.length);
            let selectedImage = categoryImages[index];
            categoryImages.splice(index, 1);

            selectedImages.push({image : selectedImage, category: category});
        }
        return selectedImages;
    }
    
    function selectDescriptions(descriptions, category, num_descriptions) {
        let array = []
        for (let i = 0; i < num_descriptions; i++){
            let keys = Object.keys(descriptions[category]);
            let randomKey = keys[Math.floor(Math.random() * keys.length)];
            array.push({category: randomKey, description: descriptions[category][randomKey]})
        }
        return array;
    }
    function get_category (categoris) {
        let category_array = [];
        let keys = Object.keys(categoris);
        for (let i = 0; i < keys.length; i++) {
            let length = categoris[keys[i]].length
            for(let j = 0; j < length; j++) {
                category_array.push(keys[i]);
            }
        }
        let randomIndex = Math.floor(Math.random() * category_array.length);
    return category_array[randomIndex];
    }
});