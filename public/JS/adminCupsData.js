import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC7oeKjthByrRm6EoF0gl5wjY528j4aWMM",
        authDomain: "resala-cup.firebaseapp.com",
        databaseURL: "https://resala-cup-default-rtdb.firebaseio.com",
        projectId: "resala-cup",
        storageBucket: "resala-cup.appspot.com",
        messagingSenderId: "920754872696",
        appId: "1:920754872696:web:18b4329eaf69d2dd8ee88d"
    };
    document.getElementById("maadi").addEventListener('click', function (e) {
        localStorage.setItem("branch", "maadi");
        window.location.href = "committees.html";
    });


    document.getElementById("alex").addEventListener('click', function (e) {
        localStorage.setItem("branch", "alex");
        window.location.href = "committees.html";
    });

    document.getElementById("Mohandessin").addEventListener('click', function (e) {
        localStorage.setItem("branch", "Mohandessin");
        window.location.href = "committees.html";
    });

    document.getElementById("naser-city").addEventListener('click', function (e) {
        localStorage.setItem("branch", "naser city");
        window.location.href = "committees.html";
    });

    document.getElementById("new-cairo").addEventListener('click', function (e) {
        localStorage.setItem("branch", "new cairo");
        window.location.href = "committees.html";
    });

    document.getElementById("Faisal").addEventListener('click', function (e) {
        localStorage.setItem("branch", "Faisal");
        window.location.href = "committees.html";
    });

    document.getElementById("Helwan").addEventListener('click', function (e) {
        localStorage.setItem("branch", "Helwan");
        window.location.href = "committees.html";
    });

    document.getElementById("El-Mokattam").addEventListener('click', function (e) {
        localStorage.setItem("branch", "El Mokattam");
        window.location.href = "committees.html";
    });

    document.getElementById("October").addEventListener('click', function (e) {
        localStorage.setItem("branch", "October");
        window.location.href = "committees.html";
    });
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);


    const dbRef = ref(db);
    var totalPoints = [];
    var totalPointSum = 0;
function retrieveTotalPoint(bran, childPath, index) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, `branches/${bran}/${childPath}/totalPoint`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        totalPoints[index] = snapshot.val();
                        resolve();
                    } else {
                        console.log("No data available");
                        reject();
                    }
                })
                .catch((error) => {
                    console.error(error);
                    reject();
                });
        });
    }

    Promise.all([
        retrieveTotalPoint("maadi", "hr", 0),
        retrieveTotalPoint("maadi", "Telecom", 1),
        retrieveTotalPoint("maadi", "Advertisements", 2),
        retrieveTotalPoint("maadi", "Donate", 3),
        retrieveTotalPoint("maadi", "Dr-competitions", 4),
        retrieveTotalPoint("maadi", "Exhibitions", 5),
        retrieveTotalPoint("maadi", "MarketCommittee", 6),
        retrieveTotalPoint("maadi", "challenge-champions", 7),
        retrieveTotalPoint("maadi", "cubs-committee", 8),
        retrieveTotalPoint("maadi", "feeding", 9),
        retrieveTotalPoint("maadi", "follow-up", 10),
        retrieveTotalPoint("maadi", "reconstruction", 11),
        retrieveTotalPoint("maadi", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("maadi", "totalMaadi", 0);

        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    function calculateTotalPointSum(bran, idtext, totalPointSum) {
        totalPointSum = totalPoints.reduce((sum, point) => sum + point, 0);

        // Retrieve plus-minus values
        var bonusTotalPromise = get(child(dbRef, `branches/${bran}/plus-minus/Bonustotal`));
        var minusTotalPromise = get(child(dbRef, `branches/${bran}/plus-minus/minustotal`));

        Promise.all([bonusTotalPromise, minusTotalPromise])
            .then((snapshots) => {
                var bonusTotal = snapshots[0].exists() ? snapshots[0].val() : 0;
                var minusTotal = snapshots[1].exists() ? snapshots[1].val() : 0;

                var finalTotal = (totalPointSum + bonusTotal - minusTotal);
                console.log("Final Total: " + finalTotal);

                // Update HTML elements
                document.getElementById(idtext).textContent = "Total: " + finalTotal;
                const updates = {};
                update[`branches/${bran}/totalpoint`] = parseInt(finalTotal);
                // Do further processing with the finalTotal value
            })
            .catch((error) => {
                console.error(error);
            });
    }

    Promise.all([
        retrieveTotalPoint("Mohandessin", "hr", 0),
        retrieveTotalPoint("Mohandessin", "Telecom", 1),
        retrieveTotalPoint("Mohandessin", "Advertisements", 2),
        retrieveTotalPoint("Mohandessin", "Donate", 3),
        retrieveTotalPoint("Mohandessin", "Dr-competitions", 4),
        retrieveTotalPoint("Mohandessin", "Exhibitions", 5),
        retrieveTotalPoint("Mohandessin", "MarketCommittee", 6),
        retrieveTotalPoint("Mohandessin", "challenge-champions", 7),
        retrieveTotalPoint("Mohandessin", "cubs-committee", 8),
        retrieveTotalPoint("Mohandessin", "feeding", 9),
        retrieveTotalPoint("Mohandessin", "follow-up", 10),
        retrieveTotalPoint("Mohandessin", "reconstruction", 11),
        retrieveTotalPoint("Mohandessin", "team", 12),
    ])
        .then(() => {
            totalPointSum = 0
            calculateTotalPointSum("Mohandessin", "totalMohandessin", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });


    Promise.all([
        retrieveTotalPoint("naser city", "hr", 0),
        retrieveTotalPoint("naser city", "Telecom", 1),
        retrieveTotalPoint("naser city", "Advertisements", 2),
        retrieveTotalPoint("naser city", "Donate", 3),
        retrieveTotalPoint("naser city", "Dr-competitions", 4),
        retrieveTotalPoint("naser city", "Exhibitions", 5),
        retrieveTotalPoint("naser city", "MarketCommittee", 6),
        retrieveTotalPoint("naser city", "challenge-champions", 7),
        retrieveTotalPoint("naser city", "cubs-committee", 8),
        retrieveTotalPoint("naser city", "feeding", 9),
        retrieveTotalPoint("naser city", "follow-up", 10),
        retrieveTotalPoint("naser city", "reconstruction", 11),
        retrieveTotalPoint("naser city", "team", 12),
    ])
        .then(() => {

            calculateTotalPointSum("naser city", "totalnaser-city", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });



    Promise.all([
        retrieveTotalPoint("new cairo", "hr", 0),
        retrieveTotalPoint("new cairo", "Telecom", 1),
        retrieveTotalPoint("new cairo", "Advertisements", 2),
        retrieveTotalPoint("new cairo", "Donate", 3),
        retrieveTotalPoint("new cairo", "Dr-competitions", 4),
        retrieveTotalPoint("new cairo", "Exhibitions", 5),
        retrieveTotalPoint("new cairo", "MarketCommittee", 6),
        retrieveTotalPoint("new cairo", "challenge-champions", 7),
        retrieveTotalPoint("new cairo", "cubs-committee", 8),
        retrieveTotalPoint("new cairo", "feeding", 9),
        retrieveTotalPoint("new cairo", "follow-up", 10),
        retrieveTotalPoint("new cairo", "reconstruction", 11),
        retrieveTotalPoint("new cairo", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("new cairo", "totalnew-cairo");
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    Promise.all([
        retrieveTotalPoint("alex", "hr", 0),
        retrieveTotalPoint("alex", "Telecom", 1),
        retrieveTotalPoint("alex", "Advertisements", 2),
        retrieveTotalPoint("alex", "Donate", 3),
        retrieveTotalPoint("alex", "Dr-competitions", 4),
        retrieveTotalPoint("alex", "Exhibitions", 5),
        retrieveTotalPoint("alex", "MarketCommittee", 6),
        retrieveTotalPoint("alex", "challenge-champions", 7),
        retrieveTotalPoint("alex", "cubs-committee", 8),
        retrieveTotalPoint("alex", "feeding", 9),
        retrieveTotalPoint("alex", "follow-up", 10),
        retrieveTotalPoint("alex", "reconstruction", 11),
        retrieveTotalPoint("alex", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("alex", "totalalex", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    Promise.all([
        retrieveTotalPoint("Faisal", "hr", 0),
        retrieveTotalPoint("Faisal", "Telecom", 1),
        retrieveTotalPoint("Faisal", "Advertisements", 2),
        retrieveTotalPoint("Faisal", "Donate", 3),
        retrieveTotalPoint("Faisal", "Dr-competitions", 4),
        retrieveTotalPoint("Faisal", "Exhibitions", 5),
        retrieveTotalPoint("Faisal", "MarketCommittee", 6),
        retrieveTotalPoint("Faisal", "challenge-champions", 7),
        retrieveTotalPoint("Faisal", "cubs-committee", 8),
        retrieveTotalPoint("Faisal", "feeding", 9),
        retrieveTotalPoint("Faisal", "follow-up", 10),
        retrieveTotalPoint("Faisal", "reconstruction", 11),
        retrieveTotalPoint("Faisal", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("Faisal", "totalFaisal", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    Promise.all([
        retrieveTotalPoint("Helwan", "hr", 0),
        retrieveTotalPoint("Helwan", "Telecom", 1),
        retrieveTotalPoint("Helwan", "Advertisements", 2),
        retrieveTotalPoint("Helwan", "Donate", 3),
        retrieveTotalPoint("Helwan", "Dr-competitions", 4),
        retrieveTotalPoint("Helwan", "Exhibitions", 5),
        retrieveTotalPoint("Helwan", "MarketCommittee", 6),
        retrieveTotalPoint("Helwan", "challenge-champions", 7),
        retrieveTotalPoint("Helwan", "cubs-committee", 8),
        retrieveTotalPoint("Helwan", "feeding", 9),
        retrieveTotalPoint("Helwan", "follow-up", 10),
        retrieveTotalPoint("Helwan", "reconstruction", 11),
        retrieveTotalPoint("Helwan", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("Helwan", "totalHelwan", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    Promise.all([
        retrieveTotalPoint("El Mokattam", "hr", 0),
        retrieveTotalPoint("El Mokattam", "Telecom", 1),
        retrieveTotalPoint("El Mokattam", "Advertisements", 2),
        retrieveTotalPoint("El Mokattam", "Donate", 3),
        retrieveTotalPoint("El Mokattam", "Dr-competitions", 4),
        retrieveTotalPoint("El Mokattam", "Exhibitions", 5),
        retrieveTotalPoint("El Mokattam", "MarketCommittee", 6),
        retrieveTotalPoint("El Mokattam", "challenge-champions", 7),
        retrieveTotalPoint("El Mokattam", "cubs-committee", 8),
        retrieveTotalPoint("El Mokattam", "feeding", 9),
        retrieveTotalPoint("El Mokattam", "follow-up", 10),
        retrieveTotalPoint("El Mokattam", "reconstruction", 11),
        retrieveTotalPoint("El Mokattam", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("El Mokattam", "totalMokattam", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    Promise.all([
        retrieveTotalPoint("October", "hr", 0),
        retrieveTotalPoint("October", "Telecom", 1),
        retrieveTotalPoint("October", "Advertisements", 2),
        retrieveTotalPoint("October", "Donate", 3),
        retrieveTotalPoint("October", "Dr-competitions", 4),
        retrieveTotalPoint("October", "Exhibitions", 5),
        retrieveTotalPoint("October", "MarketCommittee", 6),
        retrieveTotalPoint("October", "challenge-champions", 7),
        retrieveTotalPoint("October", "cubs-committee", 8),
        retrieveTotalPoint("October", "feeding", 9),
        retrieveTotalPoint("October", "follow-up", 10),
        retrieveTotalPoint("October", "reconstruction", 11),
        retrieveTotalPoint("October", "team", 12),
    ])
        .then(() => {
            calculateTotalPointSum("October", "totalOctober", 0);
        })
        .catch(() => {
            console.log("Error occurred while retrieving totalPoint values");
        });

    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(init);

    function init() {
        // Your existing code here, including the code that calls drawLineChart
        var hrmaadiPromise = get(child(dbRef, `branches/maadi/hr/totalPoint`));
        var advertisementsmaadiPromise = get(child(dbRef, `branches/maadi/Advertisements/totalPoint`));
        var DonatemaadiPromise = get(child(dbRef, `branches/maadi/Donate/totalPoint`));
        var DrcompetitionsmaadiPromise = get(child(dbRef, `branches/maadi/Dr-competitions/totalPoint`));
        var exhibitionsmaadiPromise = get(child(dbRef, `branches/maadi/Exhibitions/totalPoint`));
        var MarketmaadiPromise = get(child(dbRef, `branches/maadi/MarketCommittee/totalPoint`));
        var TelecommaadiPromise = get(child(dbRef, `branches/maadi/Telecom/totalPoint`));
        var challengechampionsmaadiPromise = get(child(dbRef, `branches/maadi/challenge-champions/totalPoint`));
        var cubscommitteemaadiPromise = get(child(dbRef, `branches/maadi/cubs-committee/totalPoint`));
        var feedingmaadiPromise = get(child(dbRef, `branches/maadi/feeding/totalPoint`));
        var followupmaadiPromise = get(child(dbRef, `branches/maadi/follow-up/totalPoint`));
        var reconstructionmaadiPromise = get(child(dbRef, `branches/maadi/reconstruction/totalPoint`));
        var teammaadiPromise = get(child(dbRef, `branches/maadi/team/totalPoint`));
        var BonusMaadi = get(child(dbRef, `branches/maadi/plus-minus/Bonustotal`));
        var minusMaadi = get(child(dbRef, `branches/maadi/plus-minus/minustotal`));


        var hrMohandessinPromise = get(child(dbRef, `branches/Mohandessin/hr/totalPoint`));
        var advertisementsMohandessinPromise = get(child(dbRef, `branches/Mohandessin/Advertisements/totalPoint`));
        var DonateMohandessinPromise = get(child(dbRef, `branches/Mohandessin/Donate/totalPoint`));
        var DrcompetitionsMohandessinPromise = get(child(dbRef, `branches/Mohandessin/Dr-competitions/totalPoint`));
        var exhibitionsMohandessinPromise = get(child(dbRef, `branches/Mohandessin/Exhibitions/totalPoint`));
        var MarketMohandessinPromise = get(child(dbRef, `branches/Mohandessin/MarketCommittee/totalPoint`));
        var TelecomMohandessinPromise = get(child(dbRef, `branches/Mohandessin/Telecom/totalPoint`));
        var challengechampionsMohandessinPromise = get(child(dbRef, `branches/Mohandessin/challenge-champions/totalPoint`));
        var cubscommitteeMohandessinPromise = get(child(dbRef, `branches/Mohandessin/cubs-committee/totalPoint`));
        var feedingMohandessinPromise = get(child(dbRef, `branches/Mohandessin/feeding/totalPoint`));
        var followupMohandessinPromise = get(child(dbRef, `branches/Mohandessin/follow-up/totalPoint`));
        var reconstructionMohandessinPromise = get(child(dbRef, `branches/Mohandessin/reconstruction/totalPoint`));
        var teamMohandessinPromise = get(child(dbRef, `branches/Mohandessin/team/totalPoint`));
        var BonusMohandessin = get(child(dbRef, `branches/Mohandessin/plus-minus/Bonustotal`));
        var minusMohandessin = get(child(dbRef, `branches/Mohandessin/plus-minus/minustotal`));


        var hralexPromise = get(child(dbRef, `branches/alex/hr/totalPoint`));
        var advertisementsalexPromise = get(child(dbRef, `branches/alex/Advertisements/totalPoint`));
        var DonatealexPromise = get(child(dbRef, `branches/alex/Donate/totalPoint`));
        var DrcompetitionsalexPromise = get(child(dbRef, `branches/alex/Dr-competitions/totalPoint`));
        var exhibitionsalexPromise = get(child(dbRef, `branches/alex/Exhibitions/totalPoint`));
        var MarketalexPromise = get(child(dbRef, `branches/alex/MarketCommittee/totalPoint`));
        var TelecomalexPromise = get(child(dbRef, `branches/alex/Telecom/totalPoint`));
        var challengechampionsalexPromise = get(child(dbRef, `branches/alex/challenge-champions/totalPoint`));
        var cubscommitteealexPromise = get(child(dbRef, `branches/alex/cubs-committee/totalPoint`));
        var feedingalexPromise = get(child(dbRef, `branches/alex/feeding/totalPoint`));
        var followupalexPromise = get(child(dbRef, `branches/alex/follow-up/totalPoint`));
        var reconstructionalexPromise = get(child(dbRef, `branches/alex/reconstruction/totalPoint`));
        var teamalexPromise = get(child(dbRef, `branches/alex/team/totalPoint`));
        var Bonusalex = get(child(dbRef, `branches/alex/plus-minus/Bonustotal`));
        var minusalex = get(child(dbRef, `branches/alex/plus-minus/minustotal`));


        var hrFaisalPromise = get(child(dbRef, `branches/Faisal/hr/totalPoint`));
        var advertisementsFaisalPromise = get(child(dbRef, `branches/Faisal/Advertisements/totalPoint`));
        var DonateFaisalPromise = get(child(dbRef, `branches/Faisal/Donate/totalPoint`));
        var DrcompetitionsFaisalPromise = get(child(dbRef, `branches/Faisal/Dr-competitions/totalPoint`));
        var exhibitionsFaisalPromise = get(child(dbRef, `branches/Faisal/Exhibitions/totalPoint`));
        var MarketFaisalPromise = get(child(dbRef, `branches/Faisal/MarketCommittee/totalPoint`));
        var TelecomFaisalPromise = get(child(dbRef, `branches/Faisal/Telecom/totalPoint`));
        var challengechampionsFaisalPromise = get(child(dbRef, `branches/Faisal/challenge-champions/totalPoint`));
        var cubscommitteeFaisalPromise = get(child(dbRef, `branches/Faisal/cubs-committee/totalPoint`));
        var feedingFaisalPromise = get(child(dbRef, `branches/Faisal/feeding/totalPoint`));
        var followupFaisalPromise = get(child(dbRef, `branches/Faisal/follow-up/totalPoint`));
        var reconstructionFaisalPromise = get(child(dbRef, `branches/Faisal/reconstruction/totalPoint`));
        var teamFaisalPromise = get(child(dbRef, `branches/Faisal/team/totalPoint`));
        var BonuFaisal = get(child(dbRef, `branches/Faisal/plus-minus/Bonustotal`));
        var minuFaisal = get(child(dbRef, `branches/Faisal/plus-minus/minustotal`));


        var hrHelwanPromise = get(child(dbRef, `branches/Helwan/hr/totalPoint`));
        var advertisementsHelwanPromise = get(child(dbRef, `branches/Helwan/Advertisements/totalPoint`));
        var DonateHelwanPromise = get(child(dbRef, `branches/Helwan/Donate/totalPoint`));
        var DrcompetitionsHelwanPromise = get(child(dbRef, `branches/Helwan/Dr-competitions/totalPoint`));
        var exhibitionsHelwanPromise = get(child(dbRef, `branches/Helwan/Exhibitions/totalPoint`));
        var MarketHelwanPromise = get(child(dbRef, `branches/Helwan/MarketCommittee/totalPoint`));
        var TelecomHelwanPromise = get(child(dbRef, `branches/Helwan/Telecom/totalPoint`));
        var challengechampionsHelwanPromise = get(child(dbRef, `branches/Helwan/challenge-champions/totalPoint`));
        var cubscommitteeHelwanPromise = get(child(dbRef, `branches/Helwan/cubs-committee/totalPoint`));
        var feedingHelwanPromise = get(child(dbRef, `branches/Helwan/feeding/totalPoint`));
        var followupHelwanPromise = get(child(dbRef, `branches/Helwan/follow-up/totalPoint`));
        var reconstructionHelwanPromise = get(child(dbRef, `branches/Helwan/reconstruction/totalPoint`));
        var teamHelwanPromise = get(child(dbRef, `branches/Helwan/team/totalPoint`));
        var BonuHelwan = get(child(dbRef, `branches/Helwan/plus-minus/Bonustotal`));
        var minuHelwan = get(child(dbRef, `branches/Helwan/plus-minus/minustotal`));


        var hrMokattamPromise = get(child(dbRef, `branches/El Mokattam/hr/totalPoint`));
        var advertisementsMokattamPromise = get(child(dbRef, `branches/El Mokattam/Advertisements/totalPoint`));
        var DonateMokattamPromise = get(child(dbRef, `branches/El Mokattam/Donate/totalPoint`));
        var DrcompetitionsMokattamPromise = get(child(dbRef, `branches/El Mokattam/Dr-competitions/totalPoint`));
        var exhibitionsMokattamPromise = get(child(dbRef, `branches/El Mokattam/Exhibitions/totalPoint`));
        var MarketMokattamPromise = get(child(dbRef, `branches/El Mokattam/MarketCommittee/totalPoint`));
        var TelecomMokattamPromise = get(child(dbRef, `branches/El Mokattam/Telecom/totalPoint`));
        var challengechampionsMokattamPromise = get(child(dbRef, `branches/El Mokattam/challenge-champions/totalPoint`));
        var cubscommitteeMokattamPromise = get(child(dbRef, `branches/El Mokattam/cubs-committee/totalPoint`));
        var feedingMokattamPromise = get(child(dbRef, `branches/El Mokattam/feeding/totalPoint`));
        var followupMokattamPromise = get(child(dbRef, `branches/El Mokattam/follow-up/totalPoint`));
        var reconstructionMokattamPromise = get(child(dbRef, `branches/El Mokattam/reconstruction/totalPoint`));
        var teamMokattamPromise = get(child(dbRef, `branches/El Mokattam/team/totalPoint`));
        var BonuMokattamn = get(child(dbRef, `branches/El Mokattam/plus-minus/Bonustotal`));
        var minuMokattam = get(child(dbRef, `branches/El Mokattam/plus-minus/minustotal`));


        var hrnaserPromise = get(child(dbRef, `branches/naser city/hr/totalPoint`));
        var advertisementsnaserPromise = get(child(dbRef, `branches/naser city/Advertisements/totalPoint`));
        var DonatenaserPromise = get(child(dbRef, `branches/naser city/Donate/totalPoint`));
        var DrcompetitionsnaserPromise = get(child(dbRef, `branches/naser city/Dr-competitions/totalPoint`));
        var exhibitionsnaserPromise = get(child(dbRef, `branches/naser city/Exhibitions/totalPoint`));
        var MarketnaserPromise = get(child(dbRef, `branches/naser city/MarketCommittee/totalPoint`));
        var TelecomnaserPromise = get(child(dbRef, `branches/naser city/Telecom/totalPoint`));
        var challengechampionsnaserPromise = get(child(dbRef, `branches/naser city/challenge-champions/totalPoint`));
        var cubscommitteenaserPromise = get(child(dbRef, `branches/naser city/cubs-committee/totalPoint`));
        var feedingnaserPromise = get(child(dbRef, `branches/naser city/feeding/totalPoint`));
        var followupnaserPromise = get(child(dbRef, `branches/naser city/follow-up/totalPoint`));
        var reconstructionnaserPromise = get(child(dbRef, `branches/naser city/reconstruction/totalPoint`));
        var teamnaserPromise = get(child(dbRef, `branches/naser city/team/totalPoint`));
        var Bonunaser = get(child(dbRef, `branches/naser city/plus-minus/Bonustotal`));
        var minunaser = get(child(dbRef, `branches/naser city/plus-minus/minustotal`));

        var hrcairoPromise = get(child(dbRef, `branches/new cairo/hr/totalPoint`));
        var advertisementscairoPromise = get(child(dbRef, `branches/new cairo/Advertisements/totalPoint`));
        var DonatecairoPromise = get(child(dbRef, `branches/new cairo/Donate/totalPoint`));
        var DrcompetitionscairoPromise = get(child(dbRef, `branches/new cairo/Dr-competitions/totalPoint`));
        var exhibitionscairoPromise = get(child(dbRef, `branches/new cairo/Exhibitions/totalPoint`));
        var MarketcairoPromise = get(child(dbRef, `branches/new cairo/MarketCommittee/totalPoint`));
        var TelecomcairoPromise = get(child(dbRef, `branches/new cairo/Telecom/totalPoint`));
        var challengechampionscairoPromise = get(child(dbRef, `branches/new cairo/challenge-champions/totalPoint`));
        var cubscommitteecairoPromise = get(child(dbRef, `branches/new cairo/cubs-committee/totalPoint`));
        var feedingcairoPromise = get(child(dbRef, `branches/new cairo/feeding/totalPoint`));
        var followupcairoPromise = get(child(dbRef, `branches/new cairo/follow-up/totalPoint`));
        var reconstructioncairoPromise = get(child(dbRef, `branches/new cairo/reconstruction/totalPoint`));
        var teamcairoPromise = get(child(dbRef, `branches/new cairo/team/totalPoint`));
        var Bonucairo = get(child(dbRef, `branches/new cairo/plus-minus/Bonustotal`));
        var minucairo = get(child(dbRef, `branches/new cairo/plus-minus/minustotal`));


        var hrOctoberomise = get(child(dbRef, `branches/October/hr/totalPoint`));
        var advertisementsOctoberPromise = get(child(dbRef, `branches/October/Advertisements/totalPoint`));
        var DonateOctoberPromise = get(child(dbRef, `branches/October/Donate/totalPoint`));
        var DrcompetitionsOctoberPromise = get(child(dbRef, `branches/October/Dr-competitions/totalPoint`));
        var exhibitionsOctoberPromise = get(child(dbRef, `branches/October/Exhibitions/totalPoint`));
        var MarketOctoberPromise = get(child(dbRef, `branches/October/MarketCommittee/totalPoint`));
        var TelecomOctoberPromise = get(child(dbRef, `branches/October/Telecom/totalPoint`));
        var challengechampionsOctoberPromise = get(child(dbRef, `branches/October/challenge-champions/totalPoint`));
        var cubscommitteeOctoberPromise = get(child(dbRef, `branches/October/cubs-committee/totalPoint`));
        var feedingOctoberPromise = get(child(dbRef, `branches/October/feeding/totalPoint`));
        var followupOctoberPromise = get(child(dbRef, `branches/October/follow-up/totalPoint`));
        var reconstructionOctoberPromise = get(child(dbRef, `branches/October/reconstruction/totalPoint`));
        var teamOctoberPromise = get(child(dbRef, `branches/October/team/totalPoint`));
        var BonuOctober = get(child(dbRef, `branches/October/plus-minus/Bonustotal`));
        var minuOctober = get(child(dbRef, `branches/October/plus-minus/minustotal`));


        Promise.all([hrmaadiPromise, advertisementsmaadiPromise, DonatemaadiPromise, DrcompetitionsmaadiPromise, exhibitionsmaadiPromise,
            MarketmaadiPromise, TelecommaadiPromise, challengechampionsmaadiPromise, cubscommitteemaadiPromise, feedingmaadiPromise,
            followupmaadiPromise, reconstructionmaadiPromise, teammaadiPromise, hrMohandessinPromise, advertisementsMohandessinPromise, DonateMohandessinPromise, DrcompetitionsMohandessinPromise, exhibitionsMohandessinPromise,
            MarketMohandessinPromise, TelecomMohandessinPromise, challengechampionsMohandessinPromise, cubscommitteeMohandessinPromise, feedingMohandessinPromise,
            followupMohandessinPromise, reconstructionMohandessinPromise, teamMohandessinPromise, hralexPromise, advertisementsalexPromise, DonatealexPromise, DrcompetitionsalexPromise, exhibitionsalexPromise,
            MarketalexPromise, TelecomalexPromise, challengechampionsalexPromise, cubscommitteealexPromise, feedingalexPromise,
            followupalexPromise, reconstructionalexPromise, teamalexPromise, hrFaisalPromise, advertisementsFaisalPromise, DonateFaisalPromise, DrcompetitionsFaisalPromise, exhibitionsFaisalPromise,
            MarketFaisalPromise, TelecomFaisalPromise, challengechampionsFaisalPromise, cubscommitteeFaisalPromise, feedingFaisalPromise,
            followupFaisalPromise, reconstructionFaisalPromise, teamFaisalPromise, hrHelwanPromise, advertisementsHelwanPromise, DonateHelwanPromise, DrcompetitionsHelwanPromise, exhibitionsHelwanPromise,
            MarketHelwanPromise, TelecomHelwanPromise, challengechampionsHelwanPromise, cubscommitteeHelwanPromise, feedingHelwanPromise,
            followupHelwanPromise, reconstructionHelwanPromise, teamHelwanPromise, BonusMaadi, minusMaadi, BonusMohandessin, minusMohandessin, Bonusalex, minusalex,
            BonuFaisal, minuFaisal, BonuHelwan, minuHelwan, hrMokattamPromise, advertisementsMokattamPromise, DonateMokattamPromise, DrcompetitionsMokattamPromise, exhibitionsMokattamPromise,
            MarketMokattamPromise, TelecomMokattamPromise, challengechampionsMokattamPromise, cubscommitteeMokattamPromise, feedingMokattamPromise,
            followupMokattamPromise, reconstructionMokattamPromise, teamMokattamPromise, BonuMokattamn, minuMokattam, hrnaserPromise, advertisementsnaserPromise, DonatenaserPromise, DrcompetitionsnaserPromise, exhibitionsnaserPromise,
            MarketnaserPromise, TelecomnaserPromise, challengechampionsnaserPromise, cubscommitteenaserPromise, feedingnaserPromise,
            followupnaserPromise, reconstructionnaserPromise, teamnaserPromise, Bonunaser, minunaser, hrcairoPromise, advertisementscairoPromise, DonatecairoPromise, DrcompetitionscairoPromise, exhibitionscairoPromise,
            MarketcairoPromise, TelecomcairoPromise, challengechampionscairoPromise, cubscommitteecairoPromise, feedingcairoPromise,
            followupcairoPromise, reconstructioncairoPromise, teamcairoPromise, Bonucairo, minucairo, hrOctoberomise, advertisementsOctoberPromise, DonateOctoberPromise, DrcompetitionsOctoberPromise, exhibitionsOctoberPromise,
            MarketOctoberPromise, TelecomOctoberPromise, challengechampionsOctoberPromise, cubscommitteeOctoberPromise, feedingOctoberPromise,
            followupOctoberPromise, reconstructionOctoberPromise, teamOctoberPromise, BonuOctober, minuOctober])
            .then((snapshots) => {
                var hrmaadi = snapshots[0].exists() ? snapshots[0].val() : 0;
                var advertisementsmaadi = snapshots[1].exists() ? snapshots[1].val() : 0;
                var Donatemaadi = snapshots[2].exists() ? snapshots[2].val() : 0;
                var DrcompetitionsmaadiPromise = snapshots[3].exists() ? snapshots[3].val() : 0;
                var exhibitionsmaadiPromise = snapshots[4].exists() ? snapshots[4].val() : 0;
                var MarketmaadiPromise = snapshots[5].exists() ? snapshots[5].val() : 0;
                var TelecommaadiPromise = snapshots[6].exists() ? snapshots[6].val() : 0;
                var challengechampionsmaadiPromise = snapshots[7].exists() ? snapshots[7].val() : 0;
                var cubscommitteemaadiPromise = snapshots[8].exists() ? snapshots[8].val() : 0;
                var feedingmaadiPromise = snapshots[9].exists() ? snapshots[9].val() : 0;
                var followupmaadiPromise = snapshots[10].exists() ? snapshots[10].val() : 0;
                var reconstructionmaadiPromise = snapshots[11].exists() ? snapshots[11].val() : 0;
                var teammaadiPromise = snapshots[12].exists() ? snapshots[12].val() : 0;
                var BonusMaadi = snapshots[65].exists() ? snapshots[65].val() : 0;
                var minusMaadi = snapshots[66].exists() ? snapshots[66].val() : 0;

                var hrMohandessin = snapshots[13].exists() ? snapshots[13].val() : 0;
                var advertisementsMohandessin = snapshots[14].exists() ? snapshots[14].val() : 0;
                var DonateMohandessin = snapshots[15].exists() ? snapshots[15].val() : 0;
                var DrcompetitionsMohandessinPromise = snapshots[16].exists() ? snapshots[16].val() : 0;
                var exhibitionsMohandessinPromise = snapshots[17].exists() ? snapshots[17].val() : 0;
                var MarketMohandessinPromise = snapshots[18].exists() ? snapshots[18].val() : 0;
                var TelecomMohandessinPromise = snapshots[19].exists() ? snapshots[19].val() : 0;
                var challengechampionsMohandessinPromise = snapshots[20].exists() ? snapshots[20].val() : 0;
                var cubscommitteeMohandessinPromise = snapshots[21].exists() ? snapshots[21].val() : 0;
                var feedingMohandessinPromise = snapshots[22].exists() ? snapshots[22].val() : 0;
                var followupMohandessinPromise = snapshots[23].exists() ? snapshots[23].val() : 0;
                var reconstructionMohandessinPromise = snapshots[24].exists() ? snapshots[24].val() : 0;
                var teamMohandessinPromise = snapshots[25].exists() ? snapshots[25].val() : 0;
                var BonusMohandessin = snapshots[67].exists() ? snapshots[67].val() : 0;
                var minusMohandessin = snapshots[68].exists() ? snapshots[68].val() : 0;

                var hralex = snapshots[26].exists() ? snapshots[26].val() : 0;
                var advertisementsalex = snapshots[27].exists() ? snapshots[27].val() : 0;
                var Donatealex = snapshots[28].exists() ? snapshots[28].val() : 0;
                var DrcompetitionsalexPromise = snapshots[29].exists() ? snapshots[29].val() : 0;
                var exhibitionsalexPromise = snapshots[30].exists() ? snapshots[30].val() : 0;
                var MarketalexPromise = snapshots[31].exists() ? snapshots[31].val() : 0;
                var TelecomalexPromise = snapshots[32].exists() ? snapshots[32].val() : 0;
                var challengechampionsalexPromise = snapshots[33].exists() ? snapshots[33].val() : 0;
                var cubscommitteealexPromise = snapshots[34].exists() ? snapshots[34].val() : 0;
                var feedingalexPromise = snapshots[35].exists() ? snapshots[35].val() : 0;
                var followupalexPromise = snapshots[36].exists() ? snapshots[36].val() : 0;
                var reconstructionalexPromise = snapshots[37].exists() ? snapshots[37].val() : 0;
                var teamalexPromise = snapshots[38].exists() ? snapshots[38].val() : 0;
                var Bonusalex = snapshots[69].exists() ? snapshots[69].val() : 0;
                var minusalex = snapshots[70].exists() ? snapshots[70].val() : 0;

                var hrFaisal = snapshots[39].exists() ? snapshots[39].val() : 0;
                var advertisementsFaisal = snapshots[40].exists() ? snapshots[40].val() : 0;
                var DonateFaisal = snapshots[41].exists() ? snapshots[41].val() : 0;
                var DrcompetitionsFaisalPromise = snapshots[42].exists() ? snapshots[42].val() : 0;
                var exhibitionsFaisalPromise = snapshots[43].exists() ? snapshots[43].val() : 0;
                var MarketFaisalPromise = snapshots[44].exists() ? snapshots[44].val() : 0;
                var TelecomFaisalPromise = snapshots[45].exists() ? snapshots[45].val() : 0;
                var challengechampionsFaisalPromise = snapshots[46].exists() ? snapshots[46].val() : 0;
                var cubscommitteeFaisalPromise = snapshots[47].exists() ? snapshots[47].val() : 0;
                var feedingFaisalPromise = snapshots[48].exists() ? snapshots[48].val() : 0;
                var followupFaisalPromise = snapshots[49].exists() ? snapshots[49].val() : 0;
                var reconstructionFaisalPromise = snapshots[50].exists() ? snapshots[50].val() : 0;
                var teamFaisalPromise = snapshots[51].exists() ? snapshots[51].val() : 0;
                var BonuFaisal = snapshots[71].exists() ? snapshots[71].val() : 0;
                var minuFaisal = snapshots[72].exists() ? snapshots[72].val() : 0;


                var hrHelwan = snapshots[52].exists() ? snapshots[52].val() : 0;
                var advertisementsHelwan = snapshots[53].exists() ? snapshots[53].val() : 0;
                var DonateHelwan = snapshots[54].exists() ? snapshots[54].val() : 0;
                var DrcompetitionsHelwanPromise = snapshots[55].exists() ? snapshots[55].val() : 0;
                var exhibitionsHelwanPromise = snapshots[56].exists() ? snapshots[56].val() : 0;
                var MarketHelwanPromise = snapshots[57].exists() ? snapshots[57].val() : 0;
                var TelecomHelwanPromise = snapshots[58].exists() ? snapshots[58].val() : 0;
                var challengechampionsHelwanPromise = snapshots[59].exists() ? snapshots[59].val() : 0;
                var cubscommitteeHelwanPromise = snapshots[60].exists() ? snapshots[60].val() : 0;
                var feedingHelwanPromise = snapshots[61].exists() ? snapshots[61].val() : 0;
                var followupHelwanPromise = snapshots[62].exists() ? snapshots[62].val() : 0;
                var reconstructionHelwanPromise = snapshots[63].exists() ? snapshots[63].val() : 0;
                var teamHelwanPromise = snapshots[64].exists() ? snapshots[64].val() : 0;
                var BonuHelwan = snapshots[73].exists() ? snapshots[73].val() : 0;
                var minuHelwan = snapshots[74].exists() ? snapshots[74].val() : 0;


                var hrMokattam = snapshots[75].exists() ? snapshots[75].val() : 0;
                var advertisementsMokattam = snapshots[76].exists() ? snapshots[76].val() : 0;
                var DonateMokattam = snapshots[77].exists() ? snapshots[77].val() : 0;
                var DrcompetitionsMokattamPromise = snapshots[78].exists() ? snapshots[78].val() : 0;
                var exhibitionsMokattamPromise = snapshots[79].exists() ? snapshots[79].val() : 0;
                var MarketMokattamPromise = snapshots[80].exists() ? snapshots[80].val() : 0;
                var TelecomMokattamPromise = snapshots[81].exists() ? snapshots[81].val() : 0;
                var challengechampionsMokattamPromise = snapshots[82].exists() ? snapshots[82].val() : 0;
                var cubscommitteeMokattamPromise = snapshots[83].exists() ? snapshots[83].val() : 0;
                var feedingMokattamPromise = snapshots[84].exists() ? snapshots[84].val() : 0;
                var followupMokattamPromise = snapshots[85].exists() ? snapshots[85].val() : 0;
                var reconstructionMokattamPromise = snapshots[86].exists() ? snapshots[86].val() : 0;
                var teamMokattamPromise = snapshots[87].exists() ? snapshots[87].val() : 0;
                var BonuMokattam = snapshots[88].exists() ? snapshots[88].val() : 0;
                var minuMokattam = snapshots[89].exists() ? snapshots[89].val() : 0;


                var hrnaser = snapshots[90].exists() ? snapshots[90].val() : 0;
                var advertisementsnaser = snapshots[91].exists() ? snapshots[91].val() : 0;
                var Donatenaser = snapshots[92].exists() ? snapshots[92].val() : 0;
                var DrcompetitionsnaserPromise = snapshots[93].exists() ? snapshots[93].val() : 0;
                var exhibitionsnaserPromise = snapshots[94].exists() ? snapshots[94].val() : 0;
                var MarketnaserPromise = snapshots[95].exists() ? snapshots[95].val() : 0;
                var TelecomnaserPromise = snapshots[96].exists() ? snapshots[96].val() : 0;
                var challengechampionsnaserPromise = snapshots[97].exists() ? snapshots[97].val() : 0;
                var cubscommitteenaserPromise = snapshots[98].exists() ? snapshots[98].val() : 0;
                var feedingnaserPromise = snapshots[99].exists() ? snapshots[99].val() : 0;
                var followupnaserPromise = snapshots[100].exists() ? snapshots[100].val() : 0;
                var reconstructionnaserPromise = snapshots[101].exists() ? snapshots[101].val() : 0;
                var teamnaserPromise = snapshots[102].exists() ? snapshots[102].val() : 0;
                var Bonunaser = snapshots[103].exists() ? snapshots[103].val() : 0;
                var minunaser = snapshots[104].exists() ? snapshots[104].val() : 0;

                var hrcairo = snapshots[105].exists() ? snapshots[105].val() : 0;
                var advertisementscairo = snapshots[106].exists() ? snapshots[106].val() : 0;
                var Donatecairo = snapshots[107].exists() ? snapshots[107].val() : 0;
                var DrcompetitionscairoPromise = snapshots[108].exists() ? snapshots[108].val() : 0;
                var exhibitionscairoPromise = snapshots[109].exists() ? snapshots[109].val() : 0;
                var MarketcairoPromise = snapshots[110].exists() ? snapshots[110].val() : 0;
                var TelecomcairoPromise = snapshots[111].exists() ? snapshots[111].val() : 0;
                var challengechampionscairoPromise = snapshots[112].exists() ? snapshots[112].val() : 0;
                var cubscommitteecairoPromise = snapshots[113].exists() ? snapshots[113].val() : 0;
                var feedingcairoPromise = snapshots[114].exists() ? snapshots[114].val() : 0;
                var followupcairoPromise = snapshots[115].exists() ? snapshots[115].val() : 0;
                var reconstructioncairoPromise = snapshots[116].exists() ? snapshots[116].val() : 0;
                var teamcairoPromise = snapshots[117].exists() ? snapshots[117].val() : 0;
                var Bonucairo = snapshots[118].exists() ? snapshots[118].val() : 0;
                var minucairo = snapshots[119].exists() ? snapshots[119].val() : 0;


                var hrOctober = snapshots[120].exists() ? snapshots[120].val() : 0;
                var advertisementsOctober = snapshots[121].exists() ? snapshots[121].val() : 0;
                var DonateOctober = snapshots[122].exists() ? snapshots[122].val() : 0;
                var DrcompetitionsOctoberPromise = snapshots[123].exists() ? snapshots[123].val() : 0;
                var exhibitionsOctoberPromise = snapshots[124].exists() ? snapshots[124].val() : 0;
                var MarketOctoberPromise = snapshots[125].exists() ? snapshots[125].val() : 0;
                var TelecomOctoberPromise = snapshots[126].exists() ? snapshots[126].val() : 0;
                var challengechampionsOctoberPromise = snapshots[127].exists() ? snapshots[127].val() : 0;
                var cubscommitteeOctoberPromise = snapshots[128].exists() ? snapshots[128].val() : 0;
                var feedingOctoberPromise = snapshots[129].exists() ? snapshots[129].val() : 0;
                var followupOctoberPromise = snapshots[130].exists() ? snapshots[130].val() : 0;
                var reconstructionOctoberPromise = snapshots[131].exists() ? snapshots[131].val() : 0;
                var teamOctoberPromise = snapshots[132].exists() ? snapshots[132].val() : 0;
                var BonuOctober = snapshots[133].exists() ? snapshots[133].val() : 0;
                var minuOctober = snapshots[134].exists() ? snapshots[134].val() : 0;


                var totalMaad = (hrmaadi + advertisementsmaadi + Donatemaadi + DrcompetitionsmaadiPromise + exhibitionsmaadiPromise + feedingmaadiPromise + cubscommitteemaadiPromise + challengechampionsmaadiPromise + TelecommaadiPromise + MarketmaadiPromise + teammaadiPromise + reconstructionmaadiPromise + followupmaadiPromise + BonusMaadi - minusMaadi);
                var totalMohand = (hrMohandessin + advertisementsMohandessin + DonateMohandessin + DrcompetitionsMohandessinPromise + exhibitionsMohandessinPromise + feedingMohandessinPromise + cubscommitteeMohandessinPromise + challengechampionsMohandessinPromise + TelecomMohandessinPromise + MarketMohandessinPromise + teamMohandessinPromise + reconstructionMohandessinPromise + followupMohandessinPromise + BonusMohandessin - minusMohandessin);
                var totalalx = (hralex + advertisementsalex + Donatealex + DrcompetitionsalexPromise + exhibitionsalexPromise + feedingalexPromise + cubscommitteealexPromise + challengechampionsalexPromise + TelecomalexPromise + MarketalexPromise + teamalexPromise + reconstructionalexPromise + followupalexPromise + Bonusalex - minusalex);
                var totalFais = (hrFaisal + advertisementsFaisal + DonateFaisal + DrcompetitionsFaisalPromise + exhibitionsFaisalPromise + feedingFaisalPromise + cubscommitteeFaisalPromise + challengechampionsFaisalPromise + TelecomFaisalPromise + MarketFaisalPromise + teamFaisalPromise + reconstructionFaisalPromise + followupFaisalPromise + BonuFaisal - minuFaisal);
                var totalHelw = (hrHelwan + advertisementsHelwan + DonateHelwan + DrcompetitionsHelwanPromise + exhibitionsHelwanPromise + feedingHelwanPromise + cubscommitteeHelwanPromise + challengechampionsHelwanPromise + TelecomHelwanPromise + MarketHelwanPromise + teamHelwanPromise + reconstructionHelwanPromise + followupHelwanPromise + BonuHelwan - minuHelwan);
                var totalMokat = (hrMokattam + advertisementsMokattam + DonateMokattam + DrcompetitionsMokattamPromise + exhibitionsMokattamPromise + feedingMokattamPromise + cubscommitteeMokattamPromise + challengechampionsMokattamPromise + TelecomMokattamPromise + MarketMokattamPromise + teamMokattamPromise + reconstructionMokattamPromise + followupMokattamPromise + BonuMokattam - minuMokattam);
                var totalnaser = (hrnaser + advertisementsnaser + Donatenaser + DrcompetitionsnaserPromise + exhibitionsnaserPromise + feedingnaserPromise + cubscommitteenaserPromise + challengechampionsnaserPromise + TelecomnaserPromise + MarketnaserPromise + teamnaserPromise + reconstructionnaserPromise + followupnaserPromise + Bonunaser - minunaser);
                var totalcairo = (hrcairo + advertisementscairo + Donatecairo + DrcompetitionscairoPromise + exhibitionscairoPromise + feedingcairoPromise + cubscommitteecairoPromise + challengechampionscairoPromise + TelecomcairoPromise + MarketcairoPromise + teamcairoPromise + reconstructioncairoPromise + followupcairoPromise + Bonucairo - minucairo);
                var totaloct = (hrOctober + advertisementsOctober + DonateOctober + DrcompetitionsOctoberPromise + exhibitionsOctoberPromise + feedingOctoberPromise + cubscommitteeOctoberPromise + challengechampionsOctoberPromise + TelecomOctoberPromise + MarketOctoberPromise + teamOctoberPromise + reconstructionOctoberPromise + followupOctoberPromise + BonuOctober - minuOctober);
                console.log("total Month 12: " + totalFais)
                drawBasic(totalMaad, totalMohand, totalalx, totalFais, totalHelw, totalMokat, totalnaser, totalcairo, totaloct);
                // Update HTML elements
                document.getElementById("new-cairo").textContent = totalcairo;
                document.getElementById("helwan").textContent = totalHelw;
                document.getElementById("mohandesien").textContent = totalMohand;


                document.getElementById("maadi").textContent = totalMaad;
                document.getElementById("alex").textContent = totalalx;
                document.getElementById("feas").textContent = totalFais;


                document.getElementById("mok").textContent = totalMokat;
                document.getElementById("naser").textContent = totalnaser;
                document.getElementById("oct").textContent = totaloct;

                drawBasicgold(totalMohand, totalHelw, totalcairo);
                drawBasicselvier(totalMaad, totalalx, totalFais);
                drawBasicbronze(totaloct, totalMokat, totalnaser);

                // Do further processing with the finalTotal value
            })
            .catch((error) => {
                console.error(error);
            });
        function drawBasic(totalMaad, totalMohand, totalalx, totalFais, totalHelw, totalMokat, totalnaser, totalcairo, totaloct) {

            var data = google.visualization.arrayToDataTable([
                ['Branch', ' total Point',],
                ['المعادى', totalMaad],
                ['الاسكندرية', totalalx],
                ['أكتوبر', totaloct],
                ['مدينة نصر', totalnaser],
                ['مصر الجديدة', totalcairo],
                ['المقطم', totalMokat],
                ['حلوان', totalHelw],
                ['فيصل', totalFais],
                ['المهندسين', totalMohand],
            ]);

            var options = {
                title: 'ترتيب الفروع للاربع شهور',
                // chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Point',
                    minValue: 0
                },
                vAxis: {
                    title: 'الفروع'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

            chart.draw(data, options);
        }
        function drawBasicgold(totalMohand, totalHelw, totalcairo) {

            var data = google.visualization.arrayToDataTable([
                ['Branch', ' total Point',],
                ['مصر الجديدة', totalcairo],
                ['حلوان', totalHelw],
                ['المهندسين', totalMohand],
            ]);

            var options = {
                title: 'المثلث الذهبى',
                // chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Point',
                    minValue: 0
                },
                vAxis: {
                    title: 'الفروع'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div_gold'));

            chart.draw(data, options);
        }

        function drawBasicselvier(totalMaad, totalalx, totalFais) {

            var data = google.visualization.arrayToDataTable([
                ['Branch', ' total Point',],
                ['المعادى', totalMaad],
                ['الاسكندرية', totalalx],
                ['فيصل', totalFais],
            ]);

            var options = {
                title: 'المثلث الفضى',
                // chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Point',
                    minValue: 0
                },
                vAxis: {
                    title: 'الفروع'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div_selvier'));

            chart.draw(data, options);
        }

        function drawBasicbronze(totaloct, totalMokat, totalnaser) {

            var data = google.visualization.arrayToDataTable([
                ['Branch', ' total Point',],
                ['المقطم', totalMokat],
                ['أكتوبر', totaloct],
                ['مدينة نصر', totalnaser],
            ]);

            var options = {
                title: 'المثلث البرونزى',
                // chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Point',
                    minValue: 0
                },
                vAxis: {
                    title: 'الفروع'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div_bronze'));

            chart.draw(data, options);
        }
    }

