const hotlines = [
    {
        help: "Violence and Abuse",
        id: "1",
        contacts: [
            {
                group: "Childhelp National Child Abuse Hotline",
                call: "Call: 800-4-A-CHILD",
                text:"",
                tty: "",
                visit: "Visit: www.CHILDHELP.org"
            },
            {
                group: "National Domestic Violence Hotline: Twenty-four-hour access from all fifty states. Translators available.",
                call: "Call: 1-800-799-SAFE (7223)",
                text: "Text: START to 88788",
                tty: "TTY: 1-800-787-3224"
            },
            {
                group: "National Sexual Assault Online Hotline",
                call: "Call: 1-800-656-HOPE (4673)"
            }
        ],
    },
    {
        help: "Mental Help and Substance abuse",
        id: "2",
        notes: [
            `National Toll-Free Help Lines`,
            `The numbers listed below can be dialed toll-free from anywhere within the United States. These organizations provide mental health information and referrals and, in some cases, crisis counseling.`
        ],
        contacts: [
            {
                group: "Al-Anon and AlaTeen: Meeting information for teens and families	888-425-2666",
                call: "Call: 888-4AL-ANON",
                visit: "Visit: www.AL-ANON.ALATEEN.org"
            }

        ]

    }
]; 

export function getHotlines() {
    return hotlines;
  }
  
  export function getHotline(hotlineId) {
    return hotlines.find(({ id }) => id === hotlineId);
  }

export default hotlines;