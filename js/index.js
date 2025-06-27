async function fetchData() {
    try {
        const response = await fetch('https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json');

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }

        const data = await response.json();
        document.getElementById('user-container').innerHTML = '';

        data.forEach((user) => {
            const userResult = document.createElement("div");
            const userContainer = document.getElementById("user-container");
            userResult.innerHTML = `${user.firstName} ${user.lastName}<br>
                                    ${user.email}<br>
                                    ${user.companyName}<br>
                                    Years Employed: ${user.yearsEmployed}`;

            userContainer.appendChild(userResult);
        });
    }
    catch(error) {
        console.error(error);
    }
}

async function fetchDataUnder10() {
    try {
        const response = await fetch('https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json');

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }

        const data = await response.json();
        document.getElementById('user-container').innerHTML = '';
        
        data.forEach((user) => {
            if (parseInt(user.yearsEmployed) < 10) {
                const userResult = document.createElement("div");
                const userContainer = document.getElementById("user-container");
                userResult.innerHTML = `${user.firstName} ${user.lastName}<br>
                                        ${user.email}<br>
                                        ${user.companyName}<br>
                                        Years Employed: ${user.yearsEmployed}`;

                userContainer.appendChild(userResult);
            }
        });
        
    }
    catch(error) {
        console.error(error);
    }
}

function resetData() {
    document.getElementById('user-container').innerHTML = '';
}