async function file_get_contents(uri, callback) {
    let res = await fetch(uri),
        ret = await res.text(); 
    return callback ? callback(ret) : ret; // a Promise() actually.
}


        function submitFeedback() {
            var category = document.getElementById("category").value;
            var feedback = document.getElementById("feedback").value;
            var branch = localStorage.getItem("branch");
            // You can add additional logic here, such as sending the feedback to a server.
            var url ='https://script.google.com/macros/s/AKfycbzHaOpP8BOHeBmthHwMC7Bey-LPaxWlf8bF8Jqt1arhXQYIB9SDSnK-6FgUNFRaXHME/exec?sdata=';
            const dash= '-';
            var temp=encodeURIComponent(branch+dash+category+dash+feedback);
            var newUrl=url+temp;
            file_get_contents(newUrl, console.log);
            // For demonstration purposes, we'll log the feedback to the console.
            console.log("Category: " + category);
            console.log("Feedback: " + feedback);

            // You can also reset the form if needed.
            document.getElementById("feedbackForm").reset();
            const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

            async function delayedGreeting() {
            await sleep(1000);
            location.reload();
            }

delayedGreeting();

            
        }