
// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
export default class RoleMapping {
    static getCommittee(email) {
        const committeeMapping = {
            "hr@gmail.com": "hr",
            "etisalat@gmail.com": "Telecom",
            "monitoring@gmail.com": "follow-up",
            "exhibition@gmail.com": "Exhibitions",
            "feeding@gmail.com": "feeding",
            "feraq@gmail.com": "team",
            "champions@gmail.com": "challenge-champions",
            "advertisement@gmail.com": "Advertisements",
            "cubs@gmail.com": "cubs-committee",
            "doctor@gmail.com": "Dr-competitions",
            "CharityMarket@gmail.com": "MarketCommittee",
            "reconstruction@gmail.com": "reconstruction",
            "donate@gmail.com": "Donate"
        };
        
        
        return committeeMapping.hasOwnProperty(email);
    }
    static getCommittee2(email) {
        const committeeMapping = {
            "hr@gmail.com": "hr",
            "etisalat@gmail.com": "Telecom",
            "monitoring@gmail.com": "follow-up",
            "exhibition@gmail.com": "Exhibitions",
            "feeding@gmail.com": "feeding",
            "feraq@gmail.com": "team",
            "champions@gmail.com": "challenge-champions",
            "advertisement@gmail.com": "Advertisements",
            "cubs@gmail.com": "cubs-committee",
            "doctor@gmail.com": "Dr-competitions",
            "CharityMarket@gmail.com": "MarketCommittee",
            "reconstruction@gmail.com": "reconstruction",
            "donate@gmail.com": "Donate"
        };
        
        console.log(committeeMapping[email]);
        return committeeMapping[email];
    }
    static getBranch(email) {
        const branchMapping = {
                "maadi@gmail.com": "maadi",
                "alex@gmail.com": "alex",
                "October@gmail.com": "October",
                "ElMokattam@gmail.com": "El Mokattam",
                "Faisal@gmail.com": "Faisal",
                "Helwan@gmail.com": "Helwan",
                "Mohandessin@gmail.com": "Mohandessin",
                "nasercity@gmail.com": "naser city",
                "heliopolis@gmail.com": "new cairo"
            };
        
        
        return branchMapping.hasOwnProperty(email);
    }
    static getBranch2(email) {
        const branchMapping = {
                "maadi@gmail.com": "maadi",
                "alex@gmail.com": "alex",
                "October@gmail.com": "October",
                "ElMokattam@gmail.com": "El Mokattam",
                "Faisal@gmail.com": "Faisal",
                "Helwan@gmail.com": "Helwan",
                "Mohandessin@gmail.com": "Mohandessin",
                "nasercity@gmail.com": "naser city",
                "heliopolis@gmail.com": "new cairo"
            };
        
        
        return branchMapping[email];
    }
}
document.getElementById("login").addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
        
        document.getElementById("spin").removeAttribute("hidden");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        const user = userCredential.user;

        const committee = RoleMapping.getCommittee(email);
        const branch=RoleMapping.getBranch(email);
        const committeeLocal=RoleMapping.getCommittee2(email);
        const branchLocal = RoleMapping.getBranch2(email);
            if(email=="admin@gmail.com"){
                window.location.href = "../html/admin/homePage.html";
            }
            else if(email=="techmanager@gmail.com"){
                window.location.href = "../html/moder/tanfezy.html";
            }
            else if (committee) {
                localStorage.setItem("committee", committeeLocal);
                window.location.href = "../html/committees/homePage.html";
            } else if(branch) {
                localStorage.setItem("branch", branchLocal);
                window.location.href = "../html/users/committeesMenu.html";
            }
         else {
            alert("User not found");
        }
    }) .catch((error) => {
                const errorMessage = error.message;
                myFunction();
                document.getElementById("spin").setAttribute("hidden", "true");
            });
});