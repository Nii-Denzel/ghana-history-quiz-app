const questions = [
  {
    question: "What is the capital city of Ghana?",
    answers: [
      { text: "Accra", correct: true },
      { text: "Kumasi", correct: false },
      { text: "Takoradi", correct: false },
      { text: "Tamale", correct: false },
    ],
  },
  {
    question: "In what year did Ghana gain independence?",
    answers: [
      { text: "1957", correct: true },
      { text: "1960", correct: false },
      { text: "1951", correct: false },
      { text: "1966", correct: false },
    ],
  },
  {
    question: "Who was Ghana's first President?",
    answers: [
      { text: "Kwame Nkrumah", correct: true },
      { text: "Kofi Abrefa Busia", correct: false },
      { text: "Jerry Rawlings", correct: false },
      { text: "John Agyekum Kufuor", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Father of the Nation' in Ghana?",
    answers: [
      { text: "Kwame Nkrumah", correct: true },
      { text: "Osei Tutu", correct: false },
      { text: "Nana Addo", correct: false },
      { text: "John Mahama", correct: false },
    ],
  },

  {
    question: "What is the national motto of Ghana?",
    answers: [
      { text: "Freedom and Justice", correct: true },
      { text: "Unity and Strength", correct: false },
      { text: "Peace and Love", correct: false },
      { text: "Hope and Courage", correct: false },
    ],
  },

  {
    question: "What was Ghana called before independence?",
    answers: [
      { text: "Gold Coast", correct: true },
      { text: "Ashanti Coast", correct: false },
      { text: "Ivory Coast", correct: false },
      { text: "Slave Coast", correct: false },
    ],
  },

  {
    question: "Which currency is used in Ghana?",
    answers: [
      { text: "Cedi", correct: true },
      { text: "Naira", correct: false },
      { text: "Dollar", correct: false },
      { text: "Shilling", correct: false },
    ],
  },
  {
    question: "Which Ghanaian city is known as the Garden City?",
    answers: [
      { text: "Kumasi", correct: true },
      { text: "Accra", correct: false },
      { text: "Cape Coast", correct: false },
      { text: "Tamale", correct: false },
    ],
  },
  {
    question: "What is Ghana's official language?",
    answers: [
      { text: "English", correct: true },
      { text: "Twi", correct: false },
      { text: "Ga", correct: false },
      { text: "Ewe", correct: false },
    ],
  },
  {
    question: "Which major lake is found in Ghana?",
    answers: [
      { text: "Lake Volta", correct: true },
      { text: "Lake Tanganyika", correct: false },
      { text: "Lake Victoria", correct: false },
      { text: "Lake Chad", correct: false },
    ],
  },
  {
    question: "Which Ghanaian football team is nicknamed the Black Stars?",
    answers: [
      { text: "National Men's Team", correct: true },
      { text: "Kotoko", correct: false },
      { text: "Hearts of Oak", correct: false },
      { text: "Dreams FC", correct: false },
    ],
  },
  {
    question: "Who was Ghana's first Prime Minister?",
    answers: [
      { text: "Kwame Nkrumah", correct: true },
      { text: "John Kufuor", correct: false },
      { text: "Edward Akufo-Addo", correct: false },
      { text: "Jerry Rawlings", correct: false },
    ],
  },

  {
    question: "In which month do Ghanaians celebrate Independence Day?",
    answers: [
      { text: "March", correct: true },
      { text: "January", correct: false },
      { text: "July", correct: false },
      { text: "December", correct: false },
    ],
  },

  {
    question: "What is the largest ethnic group in Ghana?",
    answers: [
      { text: "Akan", correct: true },
      { text: "Ga", correct: false },
      { text: "Ewe", correct: false },
      { text: "Dagomba", correct: false },
    ],
  },
  {
    question: "Who designed the Ghana flag?",
    answers: [
      { text: "Theodosia Okoh", correct: true },
      { text: "Kwame Nkrumah", correct: false },
      { text: "Yaa Asantewaa", correct: false },
      { text: "Kofi Annan", correct: false },
    ],
  },
  {
    question: "What animal is on the Ghana coat of arms?",
    answers: [
      { text: "Eagle", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "What does the black star in the Ghana flag stand for?",
    answers: [
      { text: "African Freedom", correct: true },
      { text: "Hope", correct: false },
      { text: "Unity", correct: false },
      { text: "Courage", correct: false },
    ],
  },

  {
    question: "How many stripes are on the Ghana flag?",
    answers: [
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which color in the flag represents Ghana's rich mineral wealth?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Red", correct: false },
      { text: "Green", correct: false },
      { text: "Black", correct: false },
    ],
  },

  {
    question: "What animal is on the Ghana coat of arms?",
    answers: [
      { text: "Eagle", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false },
    ],
  },

  {
    question: "Which Ghanaian is known as the 'Asantehene'?",
    answers: [
      { text: "King of the Ashanti Kingdom", correct: true },
      { text: "President of Ghana", correct: false },
      { text: "Chief of Accra", correct: false },
      { text: "Leader of Dagbon", correct: false },
    ],
  },
  {
    question: "Which mineral is Ghana famously known as a leading producer of?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Diamond", correct: false },
      { text: "Copper", correct: false },
      { text: "Bauxite", correct: false },
    ],
  },
  {
    question: "Which region is Cape Coast in?",
    answers: [
      { text: "Central Region", correct: true },
      { text: "Western Region", correct: false },
      { text: "Eastern Region", correct: false },
      { text: "Volta Region", correct: false },
    ],
  },
  {
    question: "Which river is the longest in Ghana?",
    answers: [
      { text: "Volta River", correct: true },
      { text: "Ankobra River", correct: false },
      { text: "Pra River", correct: false },
      { text: "Densu River", correct: false },
    ],
  },
  {
    question:
      "Which lake is the biggest man-made lake in the world found in Ghana?",
    answers: [
      { text: "Lake Volta", correct: true },
      { text: "Lake Bosomtwe", correct: false },
      { text: "Lake Chad", correct: false },
      { text: "Lake Malawi", correct: false },
    ],
  },

  {
    question: "What is the national pledge used for?",
    answers: [
      { text: "To show loyalty to Ghana", correct: true },
      { text: "To start football games", correct: false },
      { text: "To celebrate birthdays", correct: false },
      { text: "To welcome visitors", correct: false },
    ],
  },

  {
    question:
      "Which fort was central in the trans-Atlantic slave trade in Ghana?",
    answers: [
      { text: "Cape Coast Castle", correct: true },
      { text: "Fort Batenstein", correct: false },
      { text: "Fort William", correct: false },
      { text: "Fort Apollonia", correct: false },
    ],
  },
  {
    question:
      "Which Ghanaian dish is made with cassava and plantain and pounded together?",
    answers: [
      { text: "Fufu", correct: true },
      { text: "Banku", correct: false },
      { text: "Kenkey", correct: false },
      { text: "Waakye", correct: false },
    ],
  },
  {
    question: "Which Ghanaian holiday is celebrated on March 6th?",
    answers: [
      { text: "Independence Day", correct: true },
      { text: "Republic Day", correct: false },
      { text: "Kwame Nkrumah Memorial Day", correct: false },
      { text: "Farmer's Day", correct: false },
    ],
  },
  {
    question: "Which dance is popular among the Ewe people of Ghana?",
    answers: [
      { text: "Agbadza", correct: true },
      { text: "Adowa", correct: false },
      { text: "Kpanlogo", correct: false },
      { text: "Borborbor", correct: false },
    ],
  },
  {
    question: "What is the highest mountain in Ghana?",
    answers: [
      { text: "Mount Afadja (Afadjato)", correct: true },
      { text: "Mount Elgon", correct: false },
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Rwenzori", correct: false },
    ],
  },
  {
    question: "Which festival is celebrated by the Ga people in Accra?",
    answers: [
      { text: "Homowo Festival", correct: true },
      { text: "Aboakyer Festival", correct: false },
      { text: "Hogbetsotso Festival", correct: false },
      { text: "Odwira Festival", correct: false },
    ],
  },
  {
    question: "Which river feeds Lake Volta?",
    answers: [
      { text: "Volta River", correct: true },
      { text: "Nile River", correct: false },
      { text: "Congo River", correct: false },
      { text: "Niger River", correct: false },
    ],
  },
  {
    question: "Who led Ghana to independence?",
    answers: [
      { text: "Kwame Nkrumah", correct: true },
      { text: "Yaa Asantewaa", correct: false },
      { text: "Jerry Rawlings", correct: false },
      { text: "Komla Dumor", correct: false },
    ],
  },
  {
    question: "Which sea is along the coast of Ghana?",
    answers: [
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
      { text: "Mediterranean Sea", correct: false },
    ],
  },
  {
    question: "What colors make up the Ghanaian flag?",
    answers: [
      { text: "Red, Gold, Green, Black", correct: true },
      { text: "Red, White, Blue", correct: false },
      { text: "Green, Yellow, Blue", correct: false },
      { text: "Black, White, Red", correct: false },
    ],
  },
  {
    question: "Which Ghanaian city is famous for its kente cloth?",
    answers: [
      { text: "Bonwire (near Kumasi)", correct: true },
      { text: "Cape Coast", correct: false },
      { text: "Accra", correct: false },
      { text: "Tamale", correct: false },
    ],
  },
  {
    question: "What is Ghana's largest cocoa-producing region?",
    answers: [
      { text: "Ashanti Region", correct: true },
      { text: "Greater Accra Region", correct: false },
      { text: "Northern Region", correct: false },
      { text: "Upper East Region", correct: false },
    ],
  },
  {
    question: "Which Ghanaian footballer is known as 'Baby Jet'?",
    answers: [
      { text: "Asamoah Gyan", correct: true },
      { text: "Michael Essien", correct: false },
      { text: "Abedi Pele", correct: false },
      { text: "Sulley Muntari", correct: false },
    ],
  },
  {
    question: "Which UNESCO World Heritage Site is located in Ghana?",
    answers: [
      { text: "Cape Coast Castle", correct: true },
      { text: "Table Mountain", correct: false },
      { text: "Great Zimbabwe Ruins", correct: false },
      { text: "Mount Kenya", correct: false },
    ],
  },
  {
    question: "Which Ghanaian festival involves hunting a deer?",
    answers: [
      { text: "Aboakyer Festival", correct: true },
      { text: "Homowo Festival", correct: false },
      { text: "Fetu Afahye", correct: false },
      { text: "Hogbetsotso Festival", correct: false },
    ],
  },
  {
    question: "What is Ghana's nickname?",
    answers: [
      { text: "The Black Star of Africa", correct: true },
      { text: "The Lion of Africa", correct: false },
      { text: "The Pearl of Africa", correct: false },
      { text: "The Giant of Africa", correct: false },
    ],
  },
  {
    question:
      "Which Ghanaian woman led the Ashanti resistance against the British?",
    answers: [
      { text: "Yaa Asantewaa", correct: true },
      { text: "Efua Sutherland", correct: false },
      { text: "Rebecca Akufo-Addo", correct: false },
      { text: "Mabel Dove", correct: false },
    ],
  },
  {
    question: "Which Ghanaian port city is the country,s largest seaport?",
    answers: [
      { text: "Tema", correct: true },
      { text: "Takoradi", correct: false },
      { text: "Cape Coast", correct: false },
      { text: "Kumasi", correct: false },
    ],
  },
  {
    question: "What is the highest mountain in Ghana?",
    answers: [
      { text: "Mount Afadja", correct: true },
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: false },
      { text: "Mount Elgon", correct: false },
    ],
  },
  {
    question: "Which region is Lake Bosomtwe found?",
    answers: [
      { text: "Ashanti Region", correct: true },
      { text: "Northern Region", correct: false },
      { text: "Eastern Region", correct: false },
      { text: "Central Region", correct: false },
    ],
  },
  {
    question: "How many regions does Ghana currently have?",
    answers: [
      { text: "16", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which ocean is to the south of Ghana?",
    answers: [
      { text: "Atlantic Ocean", correct: true },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the northernmost region of Ghana?",
    answers: [
      { text: "Upper East Region", correct: true },
      { text: "Northern Region", correct: false },
      { text: "Upper West Region", correct: false },
      { text: "Savannah Region", correct: false },
    ],
  },
  {
    question: "What is Ghana's most popular traditional cloth?",
    answers: [
      { text: "Kente", correct: true },
      { text: "Adire", correct: false },
      { text: "Dashiki", correct: false },
      { text: "Ankara", correct: false },
    ],
  },
  {
    question: "What festival is celebrated by the Ga people in Accra?",
    answers: [
      { text: "Homowo", correct: true },
      { text: "Aboakyir", correct: false },
      { text: "Akwasidae", correct: false },
      { text: "Kundum", correct: false },
    ],
  },
  {
    question: "Which people celebrate Aboakyir festival?",
    answers: [
      { text: "Effutu people", correct: true },
      { text: "Ewe people", correct: false },
      { text: "Dagomba people", correct: false },
      { text: "Ga people", correct: false },
    ],
  },
  {
    question: "Which festival is celebrated by the Asante people?",
    answers: [
      { text: "Akwasidae", correct: true },
      { text: "Kundum", correct: false },
      { text: "Homowo", correct: false },
      { text: "Hogbetsotso", correct: false },
    ],
  },
  {
    question:
      "What is the name of the harvest festival celebrated by many tribes?",
    answers: [
      { text: "Homowo", correct: false },
      { text: "Kundum", correct: true },
      { text: "Hogbetsotso", correct: false },
      { text: "Akwasidae", correct: false },
    ],
  },
  {
    question: "What food is usually eaten during Homowo festival?",
    answers: [
      { text: "Kpokpoi", correct: true },
      { text: "Fufu", correct: false },
      { text: "Kenkey", correct: false },
      { text: "Waakye", correct: false },
    ],
  },
  {
    question: "What dance is popular among the Ewe people?",
    answers: [
      { text: "Agbadza", correct: true },
      { text: "Adowa", correct: false },
      { text: "Kpalongo", correct: false },
      { text: "Bamaya", correct: false },
    ],
  },
  {
    question:
      "What is the name of the stool used as a sacred symbol by the Ashanti?",
    answers: [
      { text: "Golden Stool", correct: true },
      { text: "Black Stool", correct: false },
      { text: "Silver Stool", correct: false },
      { text: "Unity Stool", correct: false },
    ],
  },
  {
    question: "Which ethnic group is mainly found in the Volta Region?",
    answers: [
      { text: "Ewe", correct: true },
      { text: "Ga", correct: false },
      { text: "Dagomba", correct: false },
      { text: "Fante", correct: false },
    ],
  },
  {
    question: "Which ethnic group is the largest in Ghana?",
    answers: [
      { text: "Akan", correct: true },
      { text: "Ewe", correct: false },
      { text: "Ga", correct: false },
      { text: "Dagomba", correct: false },
    ],
  },
  {
    question: "What is Ghana's main cash crop?",
    answers: [
      { text: "Cocoa", correct: true },
      { text: "Maize", correct: false },
      { text: "Yam", correct: false },
      { text: "Cassava", correct: false },
    ],
  },
  {
    question: "Ghana is the second-largest producer of which crop?",
    answers: [
      { text: "Cocoa", correct: true },
      { text: "Rice", correct: false },
      { text: "Coffee", correct: false },
      { text: "Cotton", correct: false },
    ],
  },
  {
    question: "What natural resource was first discovered in Ghana in 2007?",
    answers: [
      { text: "Oil", correct: true },
      { text: "Gold", correct: false },
      { text: "Diamond", correct: false },
      { text: "Bauxite", correct: false },
    ],
  },
  {
    question: "Which mineral is Ghana most famous for?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Bauxite", correct: false },
      { text: "Salt", correct: false },
      { text: "Oil", correct: false },
    ],
  },
  {
    question: "Which city is famous for gold mining?",
    answers: [
      { text: "Obuasi", correct: true },
      { text: "Takoradi", correct: false },
      { text: "Kumasi", correct: false },
      { text: "Tamale", correct: false },
    ],
  },
  {
    question: "What food crop is used to make fufu?",
    answers: [
      { text: "Cassava and Plantain", correct: true },
      { text: "Rice and Beans", correct: false },
      { text: "Maize and Groundnut", correct: false },
      { text: "Millet and Sorghum", correct: false },
    ],
  },
  {
    question: "Which food is made from fermented corn dough?",
    answers: [
      { text: "Kenkey", correct: true },
      { text: "Waakye", correct: false },
      { text: "Jollof", correct: false },
      { text: "Red-red", correct: false },
    ],
  },
  {
    question: "Which plantain dish is fried and eaten with beans?",
    answers: [
      { text: "Kelewele", correct: false },
      { text: "Fried Plantain", correct: true },
      { text: "Tatale", correct: false },
      { text: "Ampesi", correct: false },
    ],
  },
  {
    question: "What is the staple food in Northern Ghana?",
    answers: [
      { text: "Tuo Zaafi", correct: true },
      { text: "Kenkey", correct: false },
      { text: "Waakye", correct: false },
      { text: "Banku", correct: false },
    ],
  },
  {
    question: "Which Ghanaian dish is called 'red-red'?",
    answers: [
      { text: "Beans stew with fried plantain", correct: true },
      { text: "Rice with stew", correct: false },
      { text: "Kenkey and fish", correct: false },
      { text: "Yam and stew", correct: false },
    ],
  },
  {
    question: "What was the name of the first castle built in Ghana?",
    answers: [
      { text: "Elmina Castle", correct: true },
      { text: "Cape Coast Castle", correct: false },
      { text: "Christiansborg Castle", correct: false },
      { text: "Osu Castle", correct: false },
    ],
  },
  {
    question: "Where is Elmina Castle located?",
    answers: [
      { text: "Central Region", correct: true },
      { text: "Eastern Region", correct: false },
      { text: "Volta Region", correct: false },
      { text: "Northern Region", correct: false },
    ],
  },
  {
    question: "Who built Elmina Castle?",
    answers: [
      { text: "Portuguese", correct: true },
      { text: "British", correct: false },
      { text: "Dutch", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "Which European country first traded on the Gold Coast?",
    answers: [
      { text: "Portuguese", correct: true },
      { text: "British", correct: false },
      { text: "Dutch", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "What did Europeans come to the Gold Coast to trade?",
    answers: [
      { text: "Gold", correct: true },
      { text: "Oil", correct: false },
      { text: "Cotton", correct: false },
      { text: "Cocoa", correct: false },
    ],
  },
  {
    question: "What was the main product traded during slavery?",
    answers: [
      { text: "Humans", correct: true },
      { text: "Salt", correct: false },
      { text: "Yam", correct: false },
      { text: "Rubber", correct: false },
    ],
  },
  {
    question: "Where is the Cape Coast Castle found?",
    answers: [
      { text: "Central Region", correct: true },
      { text: "Western Region", correct: false },
      { text: "Greater Accra Region", correct: false },
      { text: "Eastern Region", correct: false },
    ],
  },
  {
    question: "Which castle was used to hold slaves before being sent away?",
    answers: [
      { text: "Cape Coast Castle", correct: true },
      { text: "Elmina Castle", correct: false },
      { text: "Osu Castle", correct: false },
      { text: "Christiansborg Castle", correct: false },
    ],
  },
  {
    question: "Which kingdom was very powerful in Ashanti history?",
    answers: [
      { text: "Ashanti Kingdom", correct: true },
      { text: "Dagomba Kingdom", correct: false },
      { text: "Ga Kingdom", correct: false },
      { text: "Fante Kingdom", correct: false },
    ],
  },
  {
    question:
      "Who was the famous queen mother who fought the British in Ashanti land?",
    answers: [
      { text: "Yaa Asantewaa", correct: true },
      { text: "Theodosia Okoh", correct: false },
      { text: "Efua Sutherland", correct: false },
      { text: "Rebecca Akufo-Addo", correct: false },
    ],
  },
  {
    question: "How many arms of government does Ghana have?",
    answers: [
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What are the three arms of government?",
    answers: [
      { text: "Executive, Legislature, Judiciary", correct: true },
      { text: "Police, Army, Fire Service", correct: false },
      { text: "Chiefs, Elders, Queen Mothers", correct: false },
      { text: "Doctors, Nurses, Teachers", correct: false },
    ],
  },
  {
    question: "Who is the head of state in Ghana?",
    answers: [
      { text: "The President", correct: true },
      { text: "The Speaker", correct: false },
      { text: "The Chief Justice", correct: false },
      { text: "The Prime Minister", correct: false },
    ],
  },
  {
    question: "Who makes the laws in Ghana?",
    answers: [
      { text: "Parliament", correct: true },
      { text: "Police", correct: false },
      { text: "Army", correct: false },
      { text: "Judges", correct: false },
    ],
  },
  {
    question: "Who enforces the laws in Ghana?",
    answers: [
      { text: "Police", correct: true },
      { text: "Teachers", correct: false },
      { text: "Doctors", correct: false },
      { text: "Judges", correct: false },
    ],
  },
  {
    question: "Who interprets the laws in Ghana?",
    answers: [
      { text: "Judges", correct: true },
      { text: "President", correct: false },
      { text: "Parliament", correct: false },
      { text: "Police", correct: false },
    ],
  },
  {
    question: "How many years make up one presidential term in Ghana?",
    answers: [
      { text: "4 years", correct: true },
      { text: "5 years", correct: false },
      { text: "6 years", correct: false },
      { text: "7 years", correct: false },
    ],
  },
  {
    question: "What was the name of Ghana's Parliament House?",
    answers: [
      { text: "Job 600", correct: true },
      { text: "Golden Hall", correct: false },
      { text: "Black Star Hall", correct: false },
      { text: "Kwame Nkrumah Hall", correct: false },
    ],
  },
  {
    question: "Who is the Speaker of Parliament chosen by?",
    answers: [
      { text: "Members of Parliament", correct: true },
      { text: "The President", correct: false },
      { text: "Chief Justice", correct: false },
      { text: "The People", correct: false },
    ],
  },
  {
    question: "Who votes in Ghana's elections?",
    answers: [
      { text: "Citizens above 18 years", correct: true },
      { text: "Children", correct: false },
      { text: "Foreigners", correct: false },
      { text: "Teachers only", correct: false },
    ],
  },
  {
    question: "What is the largest national park in Ghana?",
    answers: [
      { text: "Mole National Park", correct: true },
      { text: "Kakum National Park", correct: false },
      { text: "Shai Hills", correct: false },
      { text: "Bui National Park", correct: false },
    ],
  },
  {
    question: "Which national park is home to elephants in Ghana?",
    answers: [
      { text: "Mole National Park", correct: true },
      { text: "Bui National Park", correct: false },
      { text: "Kakum National Park", correct: false },
      { text: "Shai Hills", correct: false },
    ],
  },
  {
    question: "Which forest reserve has a famous canopy walkway?",
    answers: [
      { text: "Kakum National Park", correct: true },
      { text: "Mole National Park", correct: false },
      { text: "Ankasa Forest", correct: false },
      { text: "Bui Park", correct: false },
    ],
  },
  {
    question: "What is Ghana's main energy source from water?",
    answers: [
      { text: "Hydropower", correct: true },
      { text: "Solar", correct: false },
      { text: "Wind", correct: false },
      { text: "Coal", correct: false },
    ],
  },
  {
    question: "Which dam produces electricity in Ghana?",
    answers: [
      { text: "Akosombo Dam", correct: true },
      { text: "Bui Dam", correct: false },
      { text: "Kpong Dam", correct: false },
      { text: "Tema Dam", correct: false },
    ],
  },
  {
    question: "Which animal is called the 'king of the jungle'?",
    answers: [
      { text: "Lion", correct: true },
      { text: "Elephant", correct: false },
      { text: "Tiger", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "Which animal is found on the Ghana cedi note?",
    answers: [
      { text: "Eagle", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "Which animal is sacred to the Asante people?",
    answers: [
      { text: "Golden Stool (spiritual symbol)", correct: true },
      { text: "Cat", correct: false },
      { text: "Goat", correct: false },
      { text: "Dog", correct: false },
    ],
  },
  {
    question: "What is the most common tree in the northern part of Ghana?",
    answers: [
      { text: "Shea tree", correct: true },
      { text: "Coconut tree", correct: false },
      { text: "Mahogany tree", correct: false },
      { text: "Palm tree", correct: false },
    ],
  },
  {
    question: "Which sea animal is found along Ghana's coast?",
    answers: [
      { text: "Tilapia", correct: false },
      { text: "Shark", correct: true },
      { text: "Camel", correct: false },
      { text: "Elephant", correct: false },
    ],
  },
  {
    question:
      "Which bird is often used as a symbol of wisdom in Ghanaian culture?",
    answers: [
      { text: "Owl", correct: true },
      { text: "Parrot", correct: false },
      { text: "Eagle", correct: false },
      { text: "Vulture", correct: false },
    ],
  },
  {
    question: "What tree produces cocoa pods?",
    answers: [
      { text: "Cocoa tree", correct: true },
      { text: "Mango tree", correct: false },
      { text: "Palm tree", correct: false },
      { text: "Guava tree", correct: false },
    ],
  },
  {
    question: "Which river flows into the Akosombo Dam?",
    answers: [
      { text: "Volta River", correct: true },
      { text: "Pra River", correct: false },
      { text: "Ankobra River", correct: false },
      { text: "Densu River", correct: false },
    ],
  },
  {
    question: "Which region is famous for cocoa farming?",
    answers: [
      { text: "Western Region", correct: true },
      { text: "Northern Region", correct: false },
      { text: "Upper East Region", correct: false },
      { text: "Greater Accra Region", correct: false },
    ],
  },
  {
    question: "Which Ghanaian dish is eaten with light soup?",
    answers: [
      { text: "Fufu", correct: true },
      { text: "Kenkey", correct: false },
      { text: "Waakye", correct: false },
      { text: "Banku", correct: false },
    ],
  },
  {
    question: "Which plant is used to produce shea butter?",
    answers: [
      { text: "Shea tree", correct: true },
      { text: "Cocoa tree", correct: false },
      { text: "Palm tree", correct: false },
      { text: "Baobab tree", correct: false },
    ],
  },
  {
    question: "Which fruit is used to make palm wine?",
    answers: [
      { text: "Palm fruit", correct: true },
      { text: "Orange", correct: false },
      { text: "Mango", correct: false },
      { text: "Banana", correct: false },
    ],
  },
  {
    question: "Which fish is common in Ghanaian soups?",
    answers: [
      { text: "Tilapia", correct: true },
      { text: "Salmon", correct: false },
      { text: "Cod", correct: false },
      { text: "Trout", correct: false },
    ],
  },
  {
    question: "What is the main religion in Ghana?",
    answers: [
      { text: "Christianity", correct: true },
      { text: "Islam", correct: false },
      { text: "Traditional", correct: false },
      { text: "Buddhism", correct: false },
    ],
  },
  {
    question: "What is the second largest religion in Ghana?",
    answers: [
      { text: "Islam", correct: true },
      { text: "Christianity", correct: false },
      { text: "Buddhism", correct: false },
      { text: "Hinduism", correct: false },
    ],
  },
  {
    question: "What do most traditional Ghanaian religions believe in?",
    answers: [
      { text: "One Supreme God", correct: true },
      { text: "Many gods only", correct: false },
      { text: "Animals as gods", correct: false },
      { text: "No gods", correct: false },
    ],
  },
  {
    question: "What is the name of Ghana's currency?",
    answers: [
      { text: "Cedi", correct: true },
      { text: "Naira", correct: false },
      { text: "Dollar", correct: false },
      { text: "Pound", correct: false },
    ],
  },
  {
    question: "Which country is to the east of Ghana?",
    answers: [
      { text: "Togo", correct: true },
      { text: "Ivory Coast", correct: false },
      { text: "Burkina Faso", correct: false },
      { text: "Nigeria", correct: false },
    ],
  },
  {
    question: "Which country is to the west of Ghana?",
    answers: [
      { text: "Ivory Coast", correct: true },
      { text: "Togo", correct: false },
      { text: "Mali", correct: false },
      { text: "Liberia", correct: false },
    ],
  },
  {
    question: "Which country is to the north of Ghana?",
    answers: [
      { text: "Burkina Faso", correct: true },
      { text: "Togo", correct: false },
      { text: "Ivory Coast", correct: false },
      { text: "Nigeria", correct: false },
    ],
  },
  {
    question: "Who designed the Ghana national flag?",
    answers: [
      { text: "Theodosia Okoh", correct: true },
      { text: "Kwame Nkrumah", correct: false },
      { text: "J. B. Danquah", correct: false },
      { text: "Yaa Asantewaa", correct: false },
    ],
  },
  {
    question: "What do the red, gold, and green colors of the flag stand for?",
    answers: [
      { text: "Struggle, wealth, forests", correct: true },
      { text: "Love, peace, unity", correct: false },
      { text: "War, river, sky", correct: false },
      { text: "Sun, earth, sea", correct: false },
    ],
  },
  {
    question: "What does the black star on Ghana's flag mean?",
    answers: [
      { text: "Freedom and unity", correct: true },
      { text: "Darkness", correct: false },
      { text: "War", correct: false },
      { text: "Night", correct: false },
    ],
  },
  {
    question: "What is Ghana's national pledge usually recited after?",
    answers: [
      { text: "The National Anthem", correct: true },
      { text: "Morning prayers", correct: false },
      { text: "Evening news", correct: false },
      { text: "Sports events", correct: false },
    ],
  },
  {
    question: "What is Ghana's national sport?",
    answers: [
      { text: "Football (soccer)", correct: true },
      { text: "Athletics", correct: false },
      { text: "Basketball", correct: false },
      { text: "Boxing", correct: false },
    ],
  },
  {
    question: "What is the name of Ghana's senior national football team?",
    answers: [
      { text: "Black Stars", correct: true },
      { text: "Black Meteors", correct: false },
      { text: "Black Queens", correct: false },
      { text: "Black Satellites", correct: false },
    ],
  },
];
// // Shuffle questions and pick 10
// const quizQuestions = questions.sort(() => Math.random() - 0.5)  // random shuffle
// .slice(0, 10);                    // pick first 10

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = quizQuestions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.style.background = "lightgreen";
//     score++;
//   } else {
//     selectedBtn.style.background = "salmon";
//   }
//   Array.from(answerButtons.children).forEach(button => {
//     if (button.dataset.correct === "true") {
//       button.style.background = "lightgreen";
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//     questionElement.innerHTML = `You scored ${ score }; out of ${quizQuestions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < quizQuestions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < quizQuestions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();

// Shuffle all questions and pick 10
const quizQuestions = questions
  .sort(() => Math.random() - 0.5) // shuffle
  .slice(0, 10); // pick first 10

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // shuffle answers before displaying
  const shuffledAnswers = currentQuestion.answers.sort(
    () => Math.random() - 0.5
  );

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.style.background = "lightgreen";
    score++;
  } else {
    selectedBtn.style.background = "salmon";
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.background = "lightgreen";
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length) {
    handleNextButton();
  } else {
    // reshuffle questions when playing again
    const reshuffled = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    quizQuestions.splice(0, quizQuestions.length, ...reshuffled);
    startQuiz();
  }
});

startQuiz();
