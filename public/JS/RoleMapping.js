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