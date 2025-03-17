import React, { Component } from 'react';

import './Articles.css';
import './3ChineseVirus.css';
import Header from '../pages/components/Header.jsx';
import Footer from '../pages/components/Footer.jsx';

import MathJax from 'react-mathjax';

import ArticleImage from '../images/blog/chineseviruscropped.jpg';
import Timeline from './graphs3/Timeline.jsx';
import Timeline2 from './graphs3/Timeline2.jsx';
import GoogleTrends from './graphs3/GoogleTrends.jsx';
import MapChart from './graphs3/MapChart.jsx';
import MapChart2 from './graphs3/MapChart2.jsx';

import speechChineseVirus from './graphs3/ChineseVirus.csv';
import COVID19 from './graphs3/COVID19.csv';
import Coronavirus from './graphs3/Coronavirus.csv';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class ChineseVirus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNum: 0,
      color: ['black', 'black'],
      dataOne: [],
      quotes: [
        'I am posting this on behalf of my dad. He’s a 71-year old Korean adoptee. Yesterday, he was chased out of a rural convenience store after asking to use the restroom while traveling along I-5 through California to get to Portland, Oregon.',
        'Parents who have been American citizens for thirty years and have not been out of the country in twenty years, experienced three young white men who were physically aggressive towards them until they (my parents) left the premises. No one did anything to stop this',
        'I was sitting on the NJ Transit, in an inside seat, near the window. A man looked at me, went out of his way to lean inside, and coughed on me. He made eye contact with me and walked away.',
        'This moving company workers came and refused to work due to their health concerns because we are Asian American.',
        'My niece was at a local grocery store today and this lady spat on an Asian family after insulting them by stating that coronavirus was their fault. It’s unbelievable where we are. I hope the store is going to make sure charges are brought against this woman. That kind of behavior is completely unacceptable.',
        'Family of 5, was visiting as part of tour. When in old town Haleiwa, several cars pulled close as the family was walking. Occupants of cars then proceeded to roll down their windows, cough forcefully at the family, laugh, and speed off.',
        'My elderly mom and grandma were threatened and cursed at with racial slurs then followed on foot to grocery store and further verbally attacked until they locked themselves inside the dry cleaners owned by my cousin.',
        "We were having community circle in our grade 4 classroom. One of the students said 'Kill the Chinese' in Spanish when it was his turn to speak. Many of the Spanish speaking children laughed. I asked to have what he said translated. I explained to the class that the statement was offensive and not part of our norms for community circle. I brought it to the principal's attention and she spoke to the student.",
        "I was shopping & child grabbed my arm. Child said I should go back to my country & I was the reason his father died. Mother came up & put her hand on my arm, she didn't try to help me. Bakersfield occasionally has ignorant people who make fun of how I talk and look and tell me to go home. But this is scariest & saddest experience I've had in US since about 1977.",
        'Overheard in public restroom “Thank God no Chinese children were at soccer practice to infect others.” Tried to correct aspersion, but totally ignored by white patron.',
        "I was harassed by deaf white guy who can't stand me living in America. He asked me to pack up all clothes in suitcase and stated 'go back to China! Go! Go! F**k too many Asians in America.'",
        '“Three girls tapped my shoulder and made a fake vomit motion and said ‘Asian’ and ‘corona’ to me. I decided to walk away and they shouted.”',
        'Yesterday a teammate assumed I was Chinese even though I never said my race; all I said was “that is racist, I’m American FYI” when the teammate called me Chinese. He got everyone else on his team to join in and harass me. I feel ashamed almost to be Asian in America. It hurts. I was being called a “gook”, being told “China has the highest suicide rates, you should think about that :)” or calling me “ling ling” and saying I eat dogs and spread corona virus.',
        "The person said: USA should blow out the China, by circulating his friend's post. He also commented: I feel like Trump should use nuclear to finish China.",
        "I was live tweeting from a town hall on Anti-Asian Racism with a picture of the opening slide and tweeted '#AntiAsianRacism town hall happening now! Much needed perspective during this time.' and someone replied and said 'Shut up and make some fried rice you bitchy POS.'",
        'I had worn a face mask on Bart to work. There are about five black African teenagers saying I have coronavirus and used their backpack to hit me.',
        'A guy came behind me, called out “hey” as I turned around, he started spraying me with Lysol and calling me all sorts of names.',
        'I got pushed and slammed on the floor by neighbor who lost his job. He yelled at me “I lost my job cause Asians.” I got my back, neck and hand hurt. It is video recorded.',
        'My kids were at the park with their dad (who is white.) An older white man pushed my 7- year old daughter off of her bike and yelled at my husband to “take your hybrid kids home because they’re making everyone sick.”',
        "I was the only person in the bread aisle, when an older gentleman walked in. When he saw that I was Asian, he looked fearful and turned around and walked out of the aisle. In another incident (at the same store and day), I coughed into my elbow once and a couple in the next aisle said that I have the 'Chinese flu.'",
        "I'm reporting this for an elderly Taiwanese woman who was shopping at a big box retail store, where they did not have the little bars to separate orders, so that woman put her arm down to let the cashier know where her groceries ended. A white woman behind her accused her of touching her bread and promptly took that bread and threw it on the floor. She screamed loudly at the Taiwanese woman 'you touched it!' and stomped on the bread many times.",
        'A white male customer in the drive through asked my ethnicity and assumed I had a Coronavirus. I asked if there was a problem, and he replied defensively “the virus came from China”. As I got his drink from my partner, he shouted “don’t touch top!” I assured him that we’d place a new lid on the cup and scanned his credit card. After I gave his card back, he wiped his hands and card in disgust as he had a disease. He then drove off with his drink without saying thank you',
        "We own and operate a Japanese restaurant on 16th Street, in the heart of San Francisco's Mission District. We opened in 2013. On 3/26/20, four glass window panels were vandalized and shattered. We boarded the windows only to be a victim of graffiti the next day. On both days of the incident, I visually inspected the other businesses on the block. A report and a supplemental report were filed with SFPD.",
        'Graffiti on the signs that said “China Virus” and “Wuhan Virus””',
        "I'm the only Asian person living on my block. Three nights ago, someone tried to break my car window and today someone slashed one of my car tires. I've lived here for over a year and have had only one other car related incident.",
        "I get jokingly accused of eating bat and get strange looks when sneezing when I've been working here at any my company for over 2 years and people have heard my strange repeat sneezing in past. Passive aggressive workplace bullying and lying has significantly increased. I am the strongest supply chain technical analyst at the site, yet treated like dirt.",
        'I worked (I was laid off shortly after this incident) at a yoga studio and I was wearing a mask as a precautionary measure. I was washing my hands and these two white women kept staring at me and then proceeded to ask where their families should buy groceries because “us Chinese people have ruined Irvine” and how it was “ridiculous” that we still show up to yoga class and how we are “so dirty,” etc. They were complaining about how Chinese people have infected Orange County and how their families have just moved here and it was a mistake to let us into their neighborhoods associating Asians with garbage.',
        'I was waiting on a package that required a signature. The delivery driver just dropped off the package and rang the doorbell. He wrote on “Received by: COVID GUAN.”',
        'I was wearing a surgical mask to prevent myself from potential airborne infections when I drove to pick up my food a mile away from my home. On the way back home, this guy changed into my lane and started driving really slow like 5 miles per hour in front of me. When I changed lane to make a right turn, he quickly changed it along with me and came to a full stop at the signal when the light was complete green. He kept staring at me from his side mirror all the way from beginning to end. The incident left me angry and scared.',
        'A close friend yelled “why do YOU people eat such disgusting things, no offense, but YOU people are so cruel to animals”',
        'I was shouted and harassed by the cashier, workers, as well as customers at the store to get out of the store. “You Chinese bring the virus here and you dare asking people to keep social distance guideline.”',
        'I was not seen by the employee at my local post office where I have been a regular customer for over 20 years. After patiently waiting as she pointed to others behind me for nearly 45 minutes, I approached the desk when she prompted me to take several steps backwards in a very hostile tone. She had not requested any of the prior customers that had gone ahead of me, and they were also all non-Asians. The sting of her racism and coldness towards me made me feel less than and frankly, dehumanized.',
        'Called for Lyft XL from Int’l Terminal Pickup. Lyft driver arrives. Rolls down window. Mumbles something and speeds off; refusing to give me a ride. It was snowing and I was with my 18 month old son and partner returning from Costa Rica.',
        '2 separate Uber drivers would not pick me up due to my race. Each time, the driver would arrive, look at me, and speed off quickly to cancel the ride a minute later. The second driver had a face mask on, and he slowed down enough to look at me and shake his head and wave a hand at me rejecting the ride.',
        'I took a walk with a friend of mine in Visalia, CA. While we were passing a group of 4 men, one of them coughed into me, not once, but TWICE, without covering his mouth. As I turned my head back, they all burst out laughing. They then biked away.',
        'I posted on my timeline “Mexican wall, Chinese virus, what’s next America” and people started commenting about how the Chinese is to blame because it started from China. The post was highly aggressive and it made me feel uncomfortable so I decided to delete it.',
        "I was engaged in an online discussion about the source of covid 19 and got hanged up on by a group of 3 men and one woman. At the end, the woman accused me of being patient 0 and a virus spreader A white male assaulted me by throwing his drink in my face and shouting things like “they should be banned” and “they're all disgusting.” I then saw him a couple hours later; this time inside the building, rather than outside on the sidewalk, walking around the store. I filed a police report the following day with the Police Station",
        'I was walking home and someone in a pickup truck threw a bottle at me really hard. He missed.',
        'I walked into the train carriage and immediately two teenage girls started screaming and eewwwwing and making a show of covering their mouths and faces with a scarf then stood up and ran to the other end of the carriage (which was more crowded) jeering at me.',
        "As I was walking to my bus, a white, middle-aged man screamed at me to “wear a respirator” because I'm Asian. And when I was on the bus, a middle-aged woman sitting across from me kept staring at me while holding a rosary in front of her. After a few minutes of this, she moved a few seats away from me while maintaining eye contact with me.",
        'Young “white” girl told her parents she was going to “Die” (repeatedly) and her parents asked why? And she said of Coronavirus and pointed in my direction.',
        'When I was walking in the subway station, a black guy said ”Fucking Asian” to me suddenly.',
        'I’m reporting for a family. My brother in law was asked to go home because someone at his work said his wife had Covid-19. He was not asked if this was true before dismissing him for the day. His wife does not have Covid-19. Both him and his wife are Asian American.',
        "In a workplace team meeting, I found myself being a target of snarky remarks about being linked to the source and the spread of the coronavirus. I'm not Chinese and I haven't traveled internationally in years. It was ignorance at its best and comments were taken as good humor by others in the room.",
      ],
    };
    this.child = React.createRef();
  }

  componentDidMount() {}
  render() {
    return (
      <body class="articleContainer">
        <Header pageNum={5} />
        <MathJax.Provider>
          <div class="everything">
            <h1 id="article-title">"Chinese Virus"</h1>
            <img class="article-image" src={ArticleImage} alt="" />
            <div class="article-content">
              <h2>Introduction</h2>
              <p>
                For my final presentation in Expository Writing (ENG001), I
                decided that I wanted to focus on visualizing various aspects of
                my argument in my final essay. I explored how{' '}
                <strong>
                  Trump's use of the term 'Chinese virus' has led to the
                  stigmatization and discrimination of Asian American
                  communities during the United States COVID-19 crisis.
                </strong>{' '}
                My interest in Natural Language Processing inspired me take this
                data visualization and exploration approach to this assignment.
                In this presentation, I present the complete history of Trump's
                use of the term "Chinese virus" as well as quantify the effects
                it has had on the public.
              </p>
              <h2>Trump's Language</h2>
              <p>
                In order to understand the effects of Trump's rhetoric, it is
                important to first understand how and when he has used "Chinese
                virus". I focused on looking at his press briefing language as
                well as his Twitter account.
              </p>
              <p>
                Any mention of "Chinese virus" or "Wuhan virus" by Donald Trump
                in his 46 press briefings since February 26, 2020 can be found
                on the timeline below. Transcripts from press briefings were
                found on{' '}
                <a href="https://www.rev.com/blog/transcripts?s=Trump">Rev</a>.
                Any of Trump's tweets regarding COVID-19 since January 24, 2020
                are also displayed on the lower timeline with the use of
                "Chinese virus" colored in red. The dataset can be found on{' '}
                <a href="http://www.trumptwitterarchive.com/archive">
                  Trump Twitter Archive
                </a>
                .
              </p>
              <Timeline2 />
              <Timeline />
              <p>
                Trump began using the term on March 16th and vowed on March 23,
                2020 that he would stop using it. However, it is interesting to
                see that there have been instances where he has continued to use
                the term in his press briefings. On March 26, he continued to
                defend his use of "Chinese virus", mentioning in his press
                briefing how attaching location to diseases has been done in the
                past.
              </p>
              <h2>The Effects of Trump's Language</h2>
              <p>
                It has only been one month since Trump began his use of "Chinese
                virus", making it difficult to obtain large, complete datasets
                that reflect how the general population has been affected by his
                rhetoric. In my research paper, I argue that the danger of
                Trump's rhetoric is that some may put stock into his claims and
                allegations. In this portion, I wanted to look into how popular
                the term "Chinese virus" became after Trump used it which will
                give a sense of how widely used the term is.
              </p>
              <p>
                Google Trends is a great starting point in understanding the
                popularity of certain topics. It provides data on how often a
                topic is searched for over time. Google Trends data is
                normalized, meaning that the day on which the topic was most
                popular is assigned a value of 100, and all other days are
                relative to that maximum value. Because of this, the graphs show
                relative popularity rather than a numerical value for number of
                searches.
              </p>
              <div class="row_flex">
                <div>
                  <p id="google-trends-header">COVID-19 Usage</p>
                  <GoogleTrends name="COVID19Trend" dataset={COVID19} />
                </div>
                <div>
                  <p id="google-trends-header">Coronavirus Usage</p>
                  <GoogleTrends name="CoronavirusTrend" dataset={Coronavirus} />
                </div>
              </div>
              <div class="google-trends-bottom">
                <p id="google-trends-header">Chinese Virus Usage</p>
                <GoogleTrends
                  name="chineseVirusTrend"
                  dataset={speechChineseVirus}
                />
              </div>
              <p>
                The United States announced their first case of COVID-19 on
                January 20th, which can be used to explain the upticks in Google
                searches for "Coronavirus" and "Chinese Virus". "COVID-19" had
                not been introduced by the World Health Organization until
                February 11, 2020, which can explain the lack of popularity of
                the name until early March.
              </p>
              <p>
                Note that "Chinese Virus" experienced a resurgence in popularity
                in the days after Trump began using it despite the fact that
                interest in "Coronavirus" had begun to decline. However, this
                data is quite unrepresentative as those who have Googled any of
                the above terms demonstrate that they were actively seeking out
                recent information about the crisis. The data leaves out the
                section of the population that isn't as caught up on recent
                events, and thus is more susceptible to misinformation. The
                unrepresentative nature of the sample could be used to explain
                the sharp decline of the term "Chinese virus" in Google
                Searches.
              </p>
              <h2>Effects of Trump's Language on Hate Crime Data</h2>
              <p>
                In my research paper, I mention Russell Jeung and his anonymous
                reporting website,{' '}
                <a href="https://www.asianpacificpolicyandplanningcouncil.org/stop-aapi-hate/">
                  STOP AAPI HATE
                </a>
                . STOP AAPI Hate launched on March 19, 2020 and has received
                "1,135 reports in its first two weeks." In their biweekly
                reports, they release data regarding the type, location, and
                details of the attacks. Shown below is the number of reported
                hate-crimes and{' '}
                <a href="https://github.com/CSSEGISandData/COVID-19">
                  COVID-19 cases
                </a>{' '}
                by state as of April 1st.
              </p>
              <div className="mapcontainer">
                <div className="map">
                  <p id="google-trends-header">Reports of Discrimination</p>
                  <MapChart />
                </div>
                <div className="map">
                  <p id="google-trends-header">COVID-19 Cases</p>
                  <MapChart2 />
                </div>
              </div>
              <p>
                By comparing these two maps, it is apparent that there exists a
                correlation between how hard a state has been hit by COVID-19
                and the number of hate-crimes against Asians. In my essay, I
                argue that through hate-crime reporting, measures can be put in
                place to mitigate the scapegoating of Asian Americans using data
                about the location of these attacks. STOP AAPI Hate is a step in
                the right direction towards putting in place preventative
                measures where they are most needed.
              </p>
              <p>
                No conclusions can be drawn regarding the extent to which
                Trump's language correlates with hate crime data as STOP AAPI
                Hate is relatively new and has no data prior to when Trump began
                using "Chinese virus". However, we can look to towards the
                published incident reports from STOP AAPI Hate. It is
                disheartening to see clear references to "Chinese virus" or
                mentions of Trump specifically in some of these reports. Shown
                below are some of the stories given by victims.
              </p>
              <Carousel>
                {this.state.quotes.map(e => (
                  <div class="quote-container">
                    <p id="quotationMark">“</p>
                    <p id="quote">{e}</p>
                    <p id="quotationMarkLeft">”</p>
                  </div>
                ))}
              </Carousel>
              <p>
                Trump is not single handedly responsible for the stigmatization
                of the Asian American community. COVID-19 has resulted in Asian
                American communities to not only be concerned about their
                health, but also their safety and place in society. While Trump
                is not the direct cause of these hate crimes, it is clear that
                his actions and word choice have had noticeable impacts some of
                the hostile reactions to the virus.
              </p>
            </div>
          </div>
        </MathJax.Provider>
        <Footer />
      </body>
    );
  }
}

export default ChineseVirus;
