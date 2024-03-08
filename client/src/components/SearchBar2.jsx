
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends Component {
    constructor(){
        super();
        this.state={
            articles : [
                {   "id":"1",
                    "city":"kolkata",
                    "title": "Puja Roy",
                    "description": "Puja, a gold medallist in psychology, has been practicing professionally for more than 7 years now. She believes in being compassionate, understanding, & maintaining a friendly demeanour with her clients in any situation.…",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/603b643a37e19c36ed87dfa4",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/1634818300669-6V0Vd.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095354Z&X-Amz-Expires=18000&X-Amz-Signature=06a36d563efcddb47c6334b718cdcca4ae660d42604423a9419a5808c1261315&X-Amz-SignedHeaders=host"
                },
                {   "id":"2",
                    "city":"kolkata",
                    "title": "Ahana Ghosh",
                    "description": "Ahana is a Counselling Psychologist. She has extensive experience working with individuals of all ages and is committed to making a positive difference in their lives. Ahana employs a collaborative, holistic, and eclectic therapeutic approach that is founded on openness, trust, honesty, respect, and humor. …",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/644210c2774d4d18f3a95f2b",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/51f49d8d03ec34ee754f0fa6e717e64a-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095510Z&X-Amz-Expires=18000&X-Amz-Signature=e1cea0d9fdb5c17a1fee41993b96825985708ae06514b530f3ef4dab5c1e052d&X-Amz-SignedHeaders=host"
                },
                {   "id":"3",
                    "city":"kolkata",
                    "title": "Akshita Sidhardhan",
                    "description": "She is an empathetic and impassioned psychologist. She has a deep desire in helping people to understand their weaknesses and strengths. She lives by the values of allowing feelings and working towards the achievement of daily goals, however small by providing a judgment-free zone.  …",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/63a438ecdfa14a7bf47409ab",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/2125f388db5eed63783a10babc68e0b9-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095630Z&X-Amz-Expires=18000&X-Amz-Signature=03f818f5846ab81425e37780d659009ccfd2c559d23b051c54f01586f9388949&X-Amz-SignedHeaders=host"
                },
                {   "id":"4",
                    "city":"kolkata",
                    "title": "Ritam Dubey",
                    "description": "Ritam is a certified Health Psychologist and a former research scientist who worked at ICMR with more than 4 years of experience in healthcare research and counselling practice. …",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/626a1d73069e10227bba193e",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/3a53aa4bb89ab5fe6dbd0c997ae9adf3-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095707Z&X-Amz-Expires=18000&X-Amz-Signature=d6eb71e2138aef0351b7161ca2142924e0664a0d1f0fc63aae65e24d5532f291&X-Amz-SignedHeaders=host"
                },
                {   "id":"5",
                    "city":"Delhi",
                    "title": "Malvika Agarwal",
                    "description": "Malvika is an experienced Gottman Level 3 certified Counseling Psychologist specializing in working with couples, families, and young adults. With her belief that “Everyone is capable of and deserves compassion”, she is dedicated to fostering a safe environment and working with each individual to improve their quality of life…",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/63a3fc7336b41973f96efd0c",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/228ea25d85fdd0a4ad2819b3116ae2e3-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095730Z&X-Amz-Expires=18000&X-Amz-Signature=9d87ada3f9d830bb09f657cc9feed9aa944fcc755d6bba922b7c51bf90909f37&X-Amz-SignedHeaders=host"
                },
                {   "id":"6",
                    "city":"Delhi",
                    "title": "Dr. V S Ananthakrishnan",
                    "description": "Dr. V S Ananthakrishnan is an eminent practicing psychiatrist with 5+ years of experience. He is a consultant psychiatrist at the Peroor Super Speciality Hospital & specializes in de-addiction, sexology, sleep disorders, depression, anxiety, OCD, and marital problems.…",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/607fcf80a14fe9519e363e4c",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/f5ecbce4ce2e1f6ad709d3ac7b9567ae-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095751Z&X-Amz-Expires=18000&X-Amz-Signature=616c57258f56b51dc5f2eb18dac2fd6bef73daa725227af5ddeae1e78710e0bd&X-Amz-SignedHeaders=host"
                },
                {   "id":"7",
                    "city":"Delhi",
                    "title": "Ujwal Sangawar",
                    "description": "Ujwal has more than a decade of experience in the field of mental health and counseling. He has a humanitarian approach towards handling psycho-social issues. He has worked in rehabilitation and academic settings. …",
                    "url": "https://www.felicity.care/community-talk-therapists-detail/623c193acaf201116c0a345b",
                    "urlToImage": "https://felicity-uploads.s3.ap-south-1.amazonaws.com/profile/3cb481b2616878abe606a7d22c1ed5d0-rs.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVLITOL2MEF2TPDFP%2F20240307%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240307T095807Z&X-Amz-Expires=18000&X-Amz-Signature=b7b05d4e37e84245561de9beb5fe9577635dac235c48166c946fd27633d67c60&X-Amz-SignedHeaders=host"
                },
                {   "id":"8",
                    "city":"Delhi",
                    "title": "Aarthi Radhika Inuganti",
                    "description": "Aarthi Radhika Inuganti: Experienced Psychologist in Abhiramapuram, Acharapakkam, Adithya-Hospital, Amrit-Hospital, Best-Hospital, Billroth-Hospitals, Chengalpet, Choolai, Choolaimedu, Chromepet, Chennai. Aarthi Radhika Inuganti a highly regarded Psychologist with 25+ years of experience, practices at Apollo Children Hospitals Greams Road in Chennai…",
                    "url": "https://www.apollo247.com/doctors/dr-aarthi-radhika-inuganti-8355dce7-79d6-49c0-991e-919bb5fb7f11?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/noimagefemale.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"9",
                    "city":"Mumbai",
                    "title": "Dr Achal Bhagat",
                    "description": "Dr. Achal Bhagat is a top psychiatrist in Delhi with around three decades of experience in his field. He specialises in the treatment of depression, anxiety, obsessive compulsive disorder (OCD), bipolar disorder, and schizophrenia. Some of the services he provides are Cognitive Behavioral Therapy (CBT), anger management, stress counselling, and smoking…",
                    "url": "https://www.apollo247.com/doctors/dr-achal-bhagat-887f4694-b8d3-4e5c-a502-35ab1062d401?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/fa311ee5-1ebf-4291-a69b-59db07e5bff3.jpg?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"10",
                    "city":"Mumbai",
                    "title": "Dr Angshuman Das",
                    "description": "Dr. Angshuman Das is one of the most recognised neuropsychiatrists in Kolkata. He has a vast wealth of experience in treating advanced mental health disorders caused by neurological issues. As such, his expertise extends to treating and managing severe developmental and cognitive conditions, such as Attention-Deficit/Hyperactivity Disorder (ADHD),…",
                    "url": "https://www.apollo247.com/doctors/996374d2-a7de-4a56-9a9c-8fbc3d69621b?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/996374d2-a7de-4a56-9a9c-8fbc3d69621b.-angshuman-das?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"11",
                    "city":"Mumbai",
                    "title": "Dr. Anirban Dutt",
                    "description": "Dr. Anirban Dutt: Experienced Psychiatrist in 1St-Cross-Road, 24-Parganas, 24-Parganas-North, Acharya-Jagadish-Chandra-Bose-Road, Amherst-Street, Amtala, Arambagh, Auckland-Place, Bagha-Jatin, Bagh-Bazar, Kolkata.…",
                    "url": "https://www.apollo247.com/doctors/c6e6cca6-104f-424c-af53-cd09c8d384dd?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/noimagemale.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"12",
                    "city":"Mumbai",
                    "title": "Dr. D Archanaa",
                    "description": "Dr. D Archanaa is a leading psychiatrist in Chennai, India. She has more than 12 years of experience. Dr. Archanaa is well-versed with treatment for psychosis and perinatal psychiatry, her main focus in the medical industry. This requires extensive knowledge of the diseases and the latest medical advancements like antipsychotics and mood stabilisers. …",
                    "url": "https://www.apollo247.com/doctors/dr-d-archanaa-77f3cbbe-8eab-4610-9242-d326ba06078b?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/77f3cbbe-8eab-4610-9242-d326ba06078b-1704301129163.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"13",
                    "city":"Balgalore",
                    "title": "Dr Arti Bhel",
                    "description": "Dr Arti Bhel: Experienced Psychiatrist in Adi-Pampa-Road, Ashokpuram, Chamarajapuram, Chamrajpura, Elvala, Gokulam, Gora-Bazar, Ittgegud, Jayalakshmipuram, Kalidasa-Road, Mysore. Dr Arti Bhel a highly regarded Psychiatrist with 14+ years of experience, practices at Apollo BGS Hospital…",
                    "url": "https://www.apollo247.com/doctors/53c9522a-0c80-4013-bdf8-f2bcaae93d6d?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/53c9522a-0c80-4013-bdf8-f2bcaae93d6d-1708424962762.jpg?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"14",
                    "city":"Balgalore",
                    "title": "Dr Ashok K Alimchandani",
                    "description": "Senior Resident in Psychiatry in Jawaharlal Institute of Post Graduate Medical Education & Research (JIPMER), Pondicherry (1988-1990)…",
                    "url": "https://www.askapollo.com/doctors/psychiatrist/hyderabad/dr-ashok-k-alimchandani",
                    "urlToImage": "https://cdn.askapollo.com/live/images/doctors/psychiatry/dr-ashok-k-alimchandani-psychiatry-in-hyderabad.png"
                },
                {   "id":"15",
                    "city":"Balgalore",
                    "title": "Dr. Ashutosh Singh",
                    "description": "Dr Ashutosh Singh is one of the best urologists in Noida. Associated with Apollo Hospitals, Dr Singh treats a variety of urological issues such as prostrate problems, infertility, nephrectomy or kidney removal, kidney stones, male sexual dysfunction, gallbladder stones, urinary tract infection (UTI) and also other issues such as circumcision or male infert…",
                    "url": "https://www.apollo247.com/doctors/4206811a-e252-4146-ae15-ad0020d6abc3?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://cdn.askapollo.com/live/images/doctors/psychiatry/dr-ashutosh-singh-psychiatry-in-indore.png"
                },
                {   "id":"16",
                    "city":"Balgalore",
                    "title": "Dr. Bharghav Sirivelu",
                    "description": "Dr. Bharghav Sirivelu is one of the most reputed psychiatrists in Chennai whose work has helped resolve the issues of countless young patients. He specialises in adolescent and adult stress, anxiety, depression, and other psychiatric issues. Dr Sirivelu is renowned for offering his medical guidance to teenage patients. He is also an expert in behavioural…",
                    "url": "https://www.apollo247.com/doctors/dr-bharghav-sirivelu-174c529b-6b60-4547-9d65-faebc823d111?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/31a66526-1e3a-4506-a5ed-91bd419568e6.jpg?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"17",
                    "city":"Chennai",
                    "title": "Dr. Debanjan Banerjee",
                    "description": "Dr. Debanjan Banerjee is one of the best psychiatrists in Kolkata with more than a decade of experience. He specialises in geriatric neuropsychiatry, neurology, and sexual medicine. Alzheimer's Dementia, Parkinsons' Disease, depression and anxiety disorders, erectile dysfunction, and sexual problems are some of the conditions that he treats on a regular ba…",
                    "url": "https://www.apollo247.com/doctors/5f03152b-295d-4edf-b4ee-344d867c1745?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/31a66526-1e3a-4506-a5ed-91bd419568e6.jpg?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"18",
                    "city":"Chennai",
                    "title": "Dr Hema Tharoor",
                    "description": "Dr Hema Tharoor is an experienced psychiatrist in Chennai with 22 years of overall experience. Her expertise lies in diagnosing and treating various mental health disorders including anxiety disorders, mood disorders, personality disorders, and substance abuse disorders…",
                    "url": "https://www.apollo247.com/doctors/9fc99d11-9168-4d0e-bac1-596ef12e3a72?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/9fc99d11-9168-4d0e-bac1-596ef12e3a72-1704301126490.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"19",
                    "city":"Chennai",
                    "title": "Dr Jey Subburaj",
                    "description": "Dr Jey Subburaj as an experienced life coach with over a decade of dedicated practice, I specialize in helping…",
                    "url": "https://www.askapollo.com/doctors/psychologist/bangalore/dr-jey-subburaj",
                    "urlToImage": "https://cdn.askapollo.com/live/images/doctors/defaultmale.jpg"
                },
                {   "id":"20",
                    "city":"Chennai",
                    "title": "Dr Krishen Bindiganavile Ranganath",
                    "description": "Dr Krishen Ranganath is a highly experienced Consultant Psychiatrist with 15 years of experience in the field of Psychiatry in the UK and has wide ranging expertise in treatment and management of mental health problems.…",
                    "url": "https://www.askapollo.com/doctors/psychiatrist/bangalore/dr-krishen-bindiganavile-ranganath",
                    "urlToImage": "https://cdn.askapollo.com/live/images/doctors/psychiatry/dr-krishen-bindiganavile-ranganath-psychiatry-in-bangalore..jpg"
                },
                {   "id":"24",
                    "city":"Hyderabad",
                    "title": "Dr. Krishna Sahithi J",
                    "description": "Dr. Krishna Sahithi J is a Psychiatrist working at Apollo Hospitals, Jubilee Hills, Hyderabad. She has 8 years of experience in her field. She has done her MBBS from Dr. NTR University of Health Sciences Andhra Pradesh (2010) and M.D.…",
                    "url": "https://www.apollo247.com/doctors/c26b8178-4e19-4de4-b303-9abca2ce1023?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/690541a9-3cf4-477e-8696-a1b6c40f1841.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"21",
                    "city":"Hyderabad",
                    "title": "Dr. Kulkarni Gajanan",
                    "description": "With 9 years of experience in his field, Dr Kulkarni Gajanan is one of the best psychiatrists in Bangalore. He has written many research papers on subjects such as depression, suicidal tendencies and schizophrenia. It is this in-depth knowledge of mental health that makes him stand out among his peers.…",
                    "url": "https://www.apollo247.com/doctors/dr-kulkarni-gajanan-28d7e7d2-9cdf-4c7c-8a0d-1dc3e82d008f?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/28d7e7d2-9cdf-4c7c-8a0d-1dc3e82d008f-1704301128135.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"22",
                    "city":"Hyderabad",
                    "title": "Dr. Lloyds",
                    "description": "Dr. Lloyds with 7 years of experience in his field, Dr Kulkarni Gajanan is one of the best psychiatrists in Bangalore. He has written many research papers on subjects such as depression, suicidal tendencies and schizophrenia. It is this in-depth knowledge of mental health that makes him stand out among his peers.…",
                    "url": "https://www.apollo247.com/doctors/03c5271d-8323-48f8-90a6-ff944f555f44?utm_source=askapollo_web&utm_medium=web_redirection",
                    "urlToImage": "https://images.apollo247.in/doctors/noimagemale.png?tr=w-375,h-150,c-at_max,f-webp"
                },
                {   "id":"23",
                    "city":"Hyderabad",
                    "title": "Dr MOHIT MOGHE",
                    "description": "Dr MOHIT MOGHE with 5 years of experience in his field, Dr Kulkarni Gajanan is one of the best psychiatrists in Bangalore. He has written many research papers on subjects such as depression, suicidal tendencies and schizophrenia. It is this in-depth knowledge of mental health that makes him stand out among his peers.…",
                    "url": "https://www.askapollo.com/doctors/psychiatrist/gwalior/dr-mohit-moghe",
                    "urlToImage": "https://cdn.askapollo.com/live/images/doctors/psychiatry/dr-mohit-moghe-psychiatry-in-gwalior.png"
                }
            
            ],
            filteredArticles: [],
            loading: false
        };
    }

    handleChange = (value) => {
        const filteredArticles = value.trim() !== '' ?
            this.state.articles.filter(article => 
                article.title.toLowerCase().includes(value.toLowerCase()) ||
                article.city.toLowerCase().includes(value.toLowerCase())
            ) : [];

        this.setState({
            filteredArticles: filteredArticles
        });
    };

    render() {
        const { filteredArticles } = this.state;

        return (
            <div className='input-wrapper w-96 scrollbar-hide'>
                <div className=' container flex'>
                    
                    <input
                        className=' w-80 border-black border-2 bg-white p-2 rounded-xl'
                        type='text'
                        placeholder='Search for Counsellors'
                        onChange={(e) => this.handleChange(e.target.value)}
                    />
                    <FaSearch id='search-icon' className=' size-7 m-2' />
                </div>
                <div className=' flex flex-col justify-center no-scrollbar '>
                    {filteredArticles.length > 0 && filteredArticles.map(article => (
                        <div key={article.id} className=' p-2 ml-4 scrollbar-hide hover:bg-slate-100'>
                            <a className=' text-lg hover:font-bold ' href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                        </div>
                    ))}
                    {filteredArticles.length === 0 && (
                        <p></p>
                    )}
                </div>
            </div>
        );
    }
}

export default SearchBar;