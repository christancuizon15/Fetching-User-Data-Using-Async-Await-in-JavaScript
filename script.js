async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        displayUsers(users);

       
        document.getElementById("loading").style.display = "none";

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("loading").innerText = "Failed to load users.";
    }
}

fetchUsers();

function displayUsers(users) {
    const container = document.getElementById("userContainer");
    container.innerHTML = "";

    const filipinoNames = [
        "Juan Dela Cruz",
        "Maria Santos",
        "Jose Reyes",
        "Ana Lopez",
        "Mark Bautista",
        "Angela Cruz",
        "Carlo Mendoza",
        "Rica Villanueva",
        "Paolo Garcia",
        "Liza Ramos"
    ];

    
    const philippineCities = [
        "Manila",
        "Quezon City",
        "Cebu City",
        "Davao City",
        "Makati City",
        "Taguig City",
        "Pasig City",
        "Baguio City",
        "Iloilo City",
        "Cagayan de Oro City"
    ];

    users.forEach((user, index) => {

        const newName = filipinoNames[index];
        const newCity = philippineCities[index];

        const gmailEmail = newName.toLowerCase().replace(/\s+/g, ".") + "@gmail.com";

        const card = document.createElement("div");
        card.classList.add("user-card");

        card.innerHTML = `
            <h3>${newName}</h3>
            <p><strong>Email:</strong> ${gmailEmail}</p>
            <p><strong>City:</strong> ${newCity}</p>
        `;

        container.appendChild(card);
    });

    
    const extraPeople = [
        {
            name: "Christian Cuizon",
            city: "Bacolod City"
        },
        {
            name: "Miguel Fernandez",
            city: "Zamboanga City"
        }
    ];

    extraPeople.forEach(person => {
        const gmailEmail = person.name.toLowerCase().replace(/\s+/g, ".") + "@gmail.com";

        const card = document.createElement("div");
        card.classList.add("user-card");

        card.innerHTML = `
            <h3>${person.name}</h3>
            <p><strong>Email:</strong> ${gmailEmail}</p>
            <p><strong>City:</strong> ${person.city}</p>
        `;

        container.appendChild(card);
    });
}
