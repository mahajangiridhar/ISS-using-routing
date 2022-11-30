export interface mainArray {
        fairId: string;
        fairName: string;
        startDate: number;
        endDate: number;
        timezoneId: string;
        location: string| null| {
                "addressOne": string;
                "addressTwo": string
                "state": string;
                "city": string;
                "country": string;
                "zip": string;
            };
        numberOfUsersRegistered: number;
        numberOfSchoolsRegistered: number;
        isCandidateRegistered: boolean;
        bannerUrl: string;
        showRegisteredUsersToCandidate: boolean;
        showRegisteredUsersToSchools: boolean;
        showRegisteredSchoolsToCandidate: boolean;
        showRegisteredSchoolsToSchools: boolean;
        fairStatus: string;
        fairStartTime: string;
        fairEndTime: string;
        type: string;
        candidateDescription: string;
        schoolDescription: string;
    
}
