// generic type by interface

{

    interface Developer <T> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
    }

    const poorDeveloper: Developer <{
        brand:string;
        model:string;
        display:string;
    }> ={
        name: "persian",
        computer:{
            brand: "Hp",
            model:'o-lll',
            releaseYear:2013
        },
        smartWatch:{
            brand: 'Emilab',
            model:'oppp',
            display:'oled'
        }
    }

    const RichDeveloper: Developer <{
        brand:string;
        model:string;
        sleepTrack:boolean;
        HeartTrack:boolean;
    }> ={
        name: "shan",
        computer:{
            brand: "APple",
            model:'o-kk',
            releaseYear:2010
        },
        smartWatch:{
            brand: 'lasika',
            model:'something',
            HeartTrack: true,
            sleepTrack: true,
            
        }
    }
}

// code must be clean
{
    interface Developer <T> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
    }


    type Watch = {
            brand:string;
            model:string;
            display:string;   
    }

    const poorDeveloper: Developer <Watch> ={
        name: "persian",
        computer:{
            brand: "Hp",
            model:'o-lll',
            releaseYear:2013
        },
        smartWatch:{
            brand: 'Emilab',
            model:'oppp',
            display:'oled'
        }
    }

    interface richWatch{
        
            brand:string;
            model:string;
            sleepTrack:boolean;
            HeartTrack:boolean;
        
    }

    const RichDeveloper: Developer <richWatch> ={
        name: "shan",
        computer:{
            brand: "APple",
            model:'o-kk',
            releaseYear:2010
        },
        smartWatch:{
            brand: 'lasika',
            model:'something',
            HeartTrack: true,
            sleepTrack: true,
            
        }
    }
}