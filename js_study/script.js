document.addEventListener("DOMContentLoaded", function () { 
    jatos.onLoad(function() {
    
        window.mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
          };
        let isMobile = window.mobileCheck();
        if (isMobile) {
            alert('Tento experiment je optimatilizován pro PC. Prosím otevřete experiment na PC.');
            jatos.endStudy();
        }
        

        //Start of the study - personal information page
        document.querySelector('#main-container').style.display = 'none';
        document.querySelector('#first-screen').style.display = 'flex';
        document.querySelector('#instrukce_div').style.display = 'none';
        document.querySelector('#example_div').style.display = 'none';
        let progressBar = document.getElementById('progressBar');
        let progressText = document.getElementById('progressText');
        document.querySelector('#instrukce_category_div').style.display = 'none';
        document.querySelector('#endScreen').style.display = 'none';
        
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
        let container = document.getElementById('main-container'); // Get the div
        final_values = {}
        final_values['screenWidth'] = window.screen.width;
        final_values['screenHeight'] = window.screen.height;
        let kategories = new_dict["kategorie"]
        let images_select = new_dict["obrázky"]
        let category = jatos.urlQueryParameters.category
        let categories_dict = kategories[category]
        let numbers_array = [];

        if (jatos.urlQueryParameters.descriptionNumber === "1") {
            numbers_array = [0, 3, 6]
        } 
        else if (jatos.urlQueryParameters.descriptionNumber === "2") {
            numbers_array = [1, 4, 7]
        }
        else if (jatos.urlQueryParameters.descriptionNumber === "3") {
            numbers_array = [2, 5, 8]
        }
        console.log(numbers_array)

        document.getElementById('vek').addEventListener('change', function(e) {
            let value = e.target.value;
            if (value < 18 || value > 99) {
                alert('Prosím vyplňte platný věk.');
                e.target.value = '';
            }
        });
        
        function appending_descriptions(descriptions, array) {

            let category_array = []
            for ( let i = 0; i < array.length; i++) {
                let nadpis = Object.keys(descriptions)[array[i]]
                let popis = descriptions[nadpis]
                console.log(nadpis, popis)
                category_array.push({category: nadpis, description: popis})
            }
            return category_array
        }

        let selected_descriptions = appending_descriptions(categories_dict, numbers_array)

        function instructions_shower(event) {
        var vek = document.getElementById('vek').value;
        var zeme = document.getElementById('zeme').value;
        

        if (!vek || !zeme) {
            event.preventDefault();
                alert('Prosím vyplňte políčka pro pokračování.');
        } else {
            document.querySelector('#instrukce_div').style.display = 'block';
            let instrukce_div = document.querySelector('#instrukce_div')
            let instructions = document.createElement('div');
            instructions.id = "instructions"
            instrukce_div.appendChild(instructions)
            instructions.innerHTML = 'Vítáme Vás v experimentu, který se zaměřuje na hodnocení místností. V tomto experimentu bude Vaším úkolem hodnotit obrázky místností dle tří různých kategorií na škále od 0 do 100. Klikněte prosím na tlačítko "Pokračovat" na další stránce se Vám objeví ukázka, jak hodnocení obrázku bude probíhat. Poté se Vám objeví jednotlivé kategorie dle kterých budete hodnotit';
            instructions.classList.add('container');
            instructions.classList.add('container-style');
            instructions.style.fontSize = '20px';
            let instructions_button = document.createElement('button');
            instructions_button.innerHTML = 'Pokračovat';
            instructions_button.id = 'instructions-button';
            instructions_button.classList.add('btn');
            instrukce_div.appendChild(instructions_button);
            document.getElementById('instructions-button').addEventListener('click', example_shower);
            document.querySelector('#first-screen').style.display = 'none';
        }
        }
        
        function example_shower() {
        document.querySelector('#example_div').style.display = 'flex';
        document.querySelector('#instrukce_div').style.display = 'none';
        document.querySelector('#main-container').style.display = 'none';
        let example_div = document.querySelector('#example_div')
        let example = document.createElement('div');
        example_div.appendChild(example);
        let text1 = document.createElement('p');
        text1.innerHTML = 'Představte si, že dostanete za úkol hodnotit dle kategorie kočkovitost. Popisek pro tuto kategorii by byl: Představte si, že musíte ohodnotit místnost na škále kočkovitosti od 0 do 100. <strong>Kočkovitost odkazuje na míru kočičí dekore a vytváření kočičí atmosféry v místnosti.</strong> <ul><li>0 značí absence dekorace s kočičí tématikou. Místnost nepůsobí kočičím dojmem.</li><li>100 Značí maximální kočkovitost. Místnost je plná kočičích dekorací a kočičí tématiky.</li></ul>';
        example.appendChild(text1);
        let text2 = document.createElement('p');
        example.appendChild(text2);
        text2.innerHTML = 'Na levé straně vidité obrázek, který by měl kočkovitost 0 a na pravé straně obrázek, který by měl kočkovitost 100.'
        example.classList.add('container');
        example.classList.add('container-style')
        let path1 = 'examples/';
        let image_container1 = document.createElement('div');
        example.appendChild(image_container1);
        image_container1.id = 'image_container1';
        let imgElement1 = document.createElement('img');
        let image1 = "kocka1.gif";
        imgElement1.src = path1 + image1; 
        imgElement1.style.width = '40vw'; 
        imgElement1.style.height = 'auto';
        image_container1.appendChild(imgElement1);
        let path2 = 'examples/';
        let image_container2 = document.createElement('div');
        example.appendChild(image_container1);
        image_container2.id = 'image_container1';
        let imgElement2 = document.createElement('img');
        let image2 = "kocka0.jpg";
        imgElement2.src = path2 + image2; 
        imgElement2.style.width = '40vw'; 
        imgElement2.style.height = 'auto';
        image_container1.appendChild(imgElement2);
        let example_button = document.createElement('button');
        example_button.innerHTML = 'Pokračovat';
        example_button.id = 'example-button';
        example_button.classList.add('btn');
        example_div.appendChild(example_button);
        document.getElementById('example-button').addEventListener('click', instructions_category_shower);
        }

        function instructions_category_shower () {
            let vekValue = document.getElementById('vek').value;
            let zemeValue = document.getElementById('zeme').value;
            let pohlaviValue = document.getElementById('pohlavi').value;
            final_values['vek'] = vekValue;
            final_values['zeme'] = zemeValue;
            final_values['pohlavi'] = pohlaviValue;
            document.querySelector('#instrukce_category_div').style.display = 'block';
            document.querySelector('#example_div').style.display = 'none';
            let instrukce_div = document.querySelector('#instrukce_category_div')
            let instructions = document.createElement('div');
            instructions.id = "instructions-categpry"
            instrukce_div.appendChild(instructions)
            instructions.innerHTML = 'Nyní uvidíte tři kategorie, dle kterých budete hodnotit obrázky, čtěte pozorně každou instrukci.';
            instructions.classList.add('container');
            instructions.classList.add('container-style');
            instructions.style.fontSize = '20px';
            let instructions_button = document.createElement('button');
            instructions_button.innerHTML = 'Pokračovat';
            instructions_button.id = 'instructions-category-button';
            instructions_button.classList.add('btn');
            instrukce_div.appendChild(instructions_button);
            document.getElementById('instructions-category-button').addEventListener('click', category_shower);
            document.querySelector('#first-screen').style.display = 'none';
        }

        function category_shower() {
            document.querySelector('#instrukce_category_div').style.display = 'none';
            let descriptions = selected_descriptions;

            descriptions.forEach((description, index) => {
                // Create a new div for the page
                let page = document.createElement('div');
                page.id = `category-page-${index + 1}`; // index + 1 because array indices start at 0
                page.style.display = 'none'; // Initially hide the page
                page.classList.add('container');
                page.classList.add('container-style');
                page.classList.add('category-page');

                // Create a heading for the category number
                let heading = document.createElement('h2');
                heading.textContent = `Kategorie číslo ${index + 1}`;
                page.appendChild(heading);

                // Create a new div for the description
                let descriptionContainer = document.createElement('div');

                let description_category = description['category'];
                description_category = description_category.charAt(0).toUpperCase() + description_category.slice(1, -1);
                console.log(description_category)
                let span = document.createElement('span');
                span.classList.add('category_type');
                span.style.fontSize = '20px'; // Set the font size to 20px
                span.textContent = description_category;

                let label = document.createElement('label');
                label.appendChild(span);

                // Create a new div for the actual description
                let actualDescriptionContainer = document.createElement('div');
                actualDescriptionContainer.style.fontSize = '20px';

                // Make the period strong, but not the zero
                let descriptionText = description['description'];
                let regex = /^([^\.]*\.)(.*)( 0)/;
                descriptionText = descriptionText.replace(regex, '$1<strong>$2</strong><ul><li>$3');

                // Split the description text before the "100" and start the <ul><li> element
                let parts = descriptionText.split('. 100');
                if (parts[1]) {
                    parts[1] = `<li>100${parts[1]}</li></ul>`;
                }
                descriptionText = parts.join('');

                // Set the modified description text as the innerHTML of actualDescriptionContainer
                actualDescriptionContainer.innerHTML = descriptionText;

                // Append the actual description container to the label
                label.appendChild(actualDescriptionContainer);

                // Append the label to the description container
                descriptionContainer.appendChild(label);

                // Append the description container to the page
                page.appendChild(descriptionContainer);

                // Create a "Back" button
                if (index > 0) {
                    let backButton = document.createElement('button');
                    backButton.classList.add('btn');
                    backButton.style.marginRight = '10px';
                    backButton.textContent = 'Zpět';
                    backButton.addEventListener('click', () => {
                        // Hide the current page
                        page.style.display = 'none';

                        // Show the previous page
                        let previousPage = document.querySelector(`#category-page-${index}`);
                        if (previousPage) {
                            previousPage.style.display = 'block';
                        }
                    });

                    // Append the "Back" button to the page
                    page.appendChild(backButton);
                }

                // Create a "Next" button
                let nextButton = document.createElement('button');
                nextButton.classList.add('btn');
                nextButton.textContent = index === descriptions.length - 1 ? 'Začít výzkum' : 'Další';
                nextButton.addEventListener('click', () => {
                    // Hide the current page
                    page.style.display = 'none';

                    // Show the next page
                    let nextPage = document.querySelector(`#category-page-${index + 2}`);
                    if (nextPage) {
                        nextPage.style.display = 'block';
                    } else {
                        // If there is no next page, run the main function
                        main_shower();
                    }
                });

                // Append the "Next" button to the page
                page.appendChild(nextButton);

                // Append the page to the body of the document
                document.body.appendChild(page);
            });

            // Show the first category page
            document.querySelector('#category-page-1').style.display = 'block';
        }
        

        function main_shower() {    
        document.querySelector('#main-container').style.display = 'flex';
        document.querySelector('#instrukce_div').style.display = 'none';
        document.querySelector('#example_div').style.display = 'none';
        let hodnoceni = document.createElement('span');
        let number_of_images = 140
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
            bigsliderDiv.id = 'bigsliderDiv';
            rating_container.appendChild(bigsliderDiv);
            rating_container.classList.add('container');
            rating_container.classList.add('container-style')
            let path;
            let image_container = document.createElement('div');
            image_container.id = 'image_container';
            let imgElement = document.createElement('img');
            let image;
            if ([27, 55, 83, 111].includes(index)) {
                let catch_trials = ['catch1.png', 'catch2.png', 'catch3.png', 'catch4.png'];
                let randomIndex = Math.floor(Math.random() * catch_trials.length);
                image = catch_trials[randomIndex];
                path = "catch_trials/"
            } else {
                path = category + '/'
                image = image_array[index].image;
            }
            imgElement.src = path + image; 
                    imgElement.style.width = 'auto';  
                    imgElement.style.height = 'auto';
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
                    console.log(sliderDiv.offsetHeight)
                    slider.type = 'range';
                    slider.min = 0;
                    slider.max = 100;
                    slider.step = 1; // Set the step to 1

                    if (final_values[image] && final_values[image][description_category] !== undefined) {
                        slider.value = final_values[image][description_category];
                    } else {
                        slider.value = 50;
                    }

                    slider.style.width = '35vw'; // Set the width to 100%
                    slider.style.height = '10vh'; // Set the height to 25px
                    sliderDiv.appendChild(slider); // Append to the sliderDiv
                    // Create a div to display the current value
                    let valueDiv = document.createElement('div');
                    valueDiv.innerHTML = slider.value; // Set the initial value
                    valueDiv.id = 'valueDiv';
                    let percent = slider.value / slider.max; // Calculate the percentage
                    valueDiv.style.left = ((percent * 100) - 1) + '%'; // Update the horizontal position
                    valueDiv.style.position = 'absolute'; // Position the div absolutely within the sliderDiv
                    valueDiv.style.bottom = '60%'; // Position the div above the slider¨
                    valueDiv.style.backgroundColor = 'white'; // Set the background color to white
                    valueDiv.style.borderRadius = '50%'; // Set the border radius to 50%
                    valueDiv.style.width = '30px'; // Set the width to 30px
                    valueDiv.style.marginBottom = '-1em';
                    sliderDiv.style.position = 'relative'; // Make sure the sliderDiv is positioned relative to its parent
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
                    };           
                }
                    
                    let button_div = document.createElement('div');
                    button_div.id = 'button_div';
                    bigsliderDiv.appendChild(button_div);
                    let instructions_button_div = document.createElement('div');
                    instructions_button_div.id = 'instructions_button_div';
                    bigsliderDiv.appendChild(instructions_button_div);
                    let instructionnumbertwo = document.createElement('div')
                    instructions_button_div.appendChild(instructionnumbertwo)

                    if (index < selected_images.length - 1) {
                        let nextButton = document.createElement('button');
                        nextButton.innerHTML = 'Další obrázek';
                        nextButton.id = 'nextButton';
                        nextButton.classList.add('btn');
                        button_div.appendChild(nextButton);
                
                        document.querySelector('#nextButton').onclick = function() {
                            let sliders = document.querySelectorAll('input[type="range"]');
                            let allSlidersUsed = Array.from(sliders).every(slider => slider.value != 50);

                            if (!allSlidersUsed) {
                                alert("Prosím ohodnoťte obraz v každé kategorii, poté budete moci pokračovat.");
                                return;
                            }
                            
                            rating_container.innerHTML = '';
                            button_div.innerHTML = '';
                            instructionnumbertwo.innerHTML = '';
                            instructions_button_div.innerHTML = '';
                            jatos.appendResultData(final_values);
                            console.log(final_values)
                            index ++;
                            updateProgressBar(index, progressBar);
                            image_slider(selected_images, category, index);
                        };
                        }
                    
                    let instrucitonButton = document.createElement('button');
                    instrucitonButton.innerHTML = 'Instrukce';
                    instrucitonButton.id = 'instrucitonButton';
                    instrucitonButton.classList.add('btn');
                    instructions_button_div.appendChild(instrucitonButton);
                    
                    instrucitonButton.onclick = function() {
                        let pages = document.querySelectorAll('.category-page');

                        // Check if the copied page already exists
                        let copiedPage = document.getElementById('copiedPage');

                        if (!copiedPage) {
                            // Create a new div to hold the copied content
                            copiedPage = document.createElement('div');
                            copiedPage.id = 'copiedPage';
                            copiedPage.style.display = 'none'; // Initially hide the copied page
                            alert("Instrukce se zobrazili pod tlačítky")
                            copiedPage.style.marginTop = '10px';

                            // Append the copied page to the body of the document
                            instructionnumbertwo.appendChild(copiedPage);
                        }

                        // Clear the copied page's innerHTML
                        copiedPage.innerHTML = '';
                        pages.forEach(page => {
                            // Copy the inner HTML and styles of the page
                            let pageCopy = copiedPage.cloneNode();
                            pageCopy.innerHTML = page.innerHTML;
                            pageCopy.style.display = 'block'; // Make the copied page visible
                            // Remove buttons and h2 elements from the copied page
                            let buttons = pageCopy.querySelectorAll('button');
                            buttons.forEach(button => button.remove());

                            let h2s = pageCopy.querySelectorAll('h2');
                            h2s.forEach(h2 => h2.remove());

                            // Make all text not bold
                            let elements = pageCopy.querySelectorAll('*');
                            elements.forEach(element => {
                                element.style.fontWeight = 'normal';
                            })

                            // Make category-type bold
                            let spans = pageCopy.querySelectorAll('span');
                            spans.forEach(span => {
                                span.style.fontWeight = 'bold';
                            });

                            // Append the copied page to the copiedPage div
                            copiedPage.appendChild(pageCopy);
                        });

                        // Toggle the visibility of the copied page
                        if (copiedPage.style.display === 'none') {
                            copiedPage.style.display = 'block';
                        } else {
                            copiedPage.style.display = 'none';
                        }
                    };
                
                        if (index == selected_images.length - 1) {
                            let submitButton = document.createElement('button');
                            submitButton.innerHTML = 'Odevzdejte výseledky';
                            submitButton.id = 'submitButton';
                            submitButton.classList.add('btn');
                            button_div.appendChild(submitButton);
                            submitButton.onclick = function() {
                                document.querySelector('#main-container').style.display = 'none';
                                document.querySelector('#endScreen').style.display = 'flex';
                            };
                        }
                    let final_button = document.querySelector('#end-button');
                    final_button.onclick = function() {
                        jatos.endStudy();
                    };
                         } // Add this closing curly brace
            };
            });   

            function selectFromAll(images, numImages, category) {
                let categoryImages = images[category];
                let selectedImages = [];
                while(selectedImages.length < numImages){
                    let index = Math.floor(Math.random() * categoryImages.length);
                    let selectedImage = categoryImages[index];
                    if (!selectedImages.some(img => img.image === selectedImage)) {
                        categoryImages.splice(index, 1);
                        selectedImages.push({image : selectedImage, category: category});
                    }
                }
                return selectedImages;
            }
});