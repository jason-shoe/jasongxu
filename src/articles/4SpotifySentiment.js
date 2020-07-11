import React, { Component } from 'react';

import './Articles.css';
import './4SpotifySentiment.css';
import Header from '../pages/components/Header.js';
import Footer from '../pages/components/Footer.js';
import Highlight from 'react-highlight'


import MathJax from 'react-mathjax';

import ArticleImage from "./graphs4/spotify.png";
import SpotifySad from "./graphs4/1sad.png";
import SpotifyHappy from "./graphs4/1happy.png";
import SpotifyCalm from "./graphs4/1calm.png";
import SpotifyEnergetic from "./graphs4/1energetic.png";
import dataset2pairplot from "./graphs4/2dataset2pairplot.png";
import dataset2DecisionTreeConfusionMatrix from "./graphs4/2dataset2DecisionTreeConfusionMatrix.png";
import dataset2DecisionTreeOverfitting from "./graphs4/2dataset2DecisionTreeOverfitting.png";

import dataset3KDE1 from "./graphs4/3dataset3KDE1.png";
import dataset3KDE2 from "./graphs4/3dataset3KDE2.png";
import dataset3KDE3 from "./graphs4/3dataset3KDE3.png";
import dataset3KDE4 from "./graphs4/3dataset3KDE4.png";
import dataset3KDE5 from "./graphs4/3dataset3KDE5.png";
import dataset3KDE6 from "./graphs4/3dataset3KDE6.png";
import dataset3KDE7 from "./graphs4/3dataset3KDE7.png";
import dataset3KDE8 from "./graphs4/3dataset3KDE8.png";
import dataset3KDE9 from "./graphs4/3dataset3KDE9.png";
import dataset3KDE10 from "./graphs4/3dataset3KDE10.png";
import dataset3KDE11 from "./graphs4/3dataset3KDE11.png";
import dataset13SGDConfusionMatrix1 from "./graphs4/5dataset13SGDConfusionMatrix1.png";
import dataset13SGDConfusionMatrix2 from "./graphs4/5dataset13SGDConfusionMatrix2.png";


import dataset13DecisionTreeConfusionMatrix from "./graphs4/5dataset13DecisionTreeConfusionMatrix.png";
import dataset13DecisionTreeOverfitting from "./graphs4/5dataset13DecisionTreeOverfitting.png";


import dataset131 from "./graphs4/6dataset131.png";
import dataset132 from "./graphs4/6dataset132.png";
import dataset133 from "./graphs4/6dataset133.png";
import dataset134 from "./graphs4/6dataset134.png";


import dataset13CoefficientsHeatmap from "./graphs4/6dataset13CoefficientsHeatmap.png";
import dataset13ConfusionMatrix1 from "./graphs4/6dataset13ConfusionMatrix1.png";
import dataset13ConfusionMatrix2 from "./graphs4/6dataset13ConfusionMatrix2.png";

import finalTest from "./graphs4/6finaltest.png";


    
class SpotifySentiment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNum: 0,
            color: ['black','black'],
            dataOne: [],
            
        }
        this.child = React.createRef();
    }
    

    componentDidMount(){
    }
  render(){
    return(
    <body class="articleContainer">
  		<Header pageNum = {5} />
        <MathJax.Provider>
            <div class="everything">
                <h1 id="article-title">Spotify Sentiment Classifier</h1>
                <img class = "article-image" src={ArticleImage} alt=""/>
                <div class="article-content">
                    <h2>Final Product</h2>
                    <p>I've created a Heroku app (<a href="http://spotify-sentiment-jgx.herokuapp.com">http://spotify-sentiment-jgx.herokuapp.com</a>) which can
                        classify the moods of any Spotify track, playlist, album, or artist chosen by the user</p>
                    <h2>Introduction</h2>
                    <p>Recently, I discovered that I am able to download my own social media download and how it is used to shape
                        the advertisements that I am exposed to. I've been compiling all of these files about my internet usage into
                        a central location. When it came time to Spotify, I began wondering whether or not my listening history was any
                        indication of how I was feeling or what my mood was on a certain day. I saw this as an interesting opportunity
                        to try my hand at an introductory Machine Learning project. As a way to put into practice what I've been studying for the past couple of weeks, 
                        I decided to create a <strong>Spotify Sentiment Classifier</strong></p>
                    <h2>Data Collection</h2>
                    <p>When determining what the classes (moods) of my model would be, I used a Tufts paper on <a href="https://sites.tufts.edu/eeseniordesignhandbook/2015/music-mood-classification/">Music Mood Classification</a> as
                        inspiration. This paper classifies all songs as <strong>energetic, happy, sad, or calm</strong>. These moods
                        can be differentiated by varying levels of intensity, timbre, pitch, and rhythm. </p>
                    <p>To collect music data, I decided to use Spotify because of their wide range of music, popularity, 
                        and easy to use API. I used the Python library <a href="https://spotipy.readthedocs.io/en/2.12.0/">Spotipy</a> to
                        easily use the Spotify API. Spotify has two main GET methods for track audio data: <strong>audio_features</strong> and <strong>audio_analysis</strong>. audio_features provides
                        higher level information regarding the track, like acousticness, instrumentalness, speechiness, etc. Audio analysis, on the other hand, provides lower level data, like levels of pitch
                        and sound. These two GET methods outlined the two different datasets that I would produce.
                    </p>
                    <p>The first dataset has the following columns that have already been calculated by Spotify</p>
                    <table class="dataset_header_spotify">
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>acousticness</td>
                                <td>danceability</td>
                                <td>duration_ms</td>
                                <td>energy</td>
                                <td>instrumentalness</td>
                                <td>key</td>
                            </tr>
                            <tr>
                                <td>liveness</td>
                                <td>loudness</td>
                                <td>mode</td>
                                <td>speechiness</td>
                                <td>tempo</td>
                                <td>time_signature</td>
                                <td>valence</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>The second dataset requires a bit more computation and has the following columns. This dataset was meant
                        to try to emulate the results of the aforementioned Tufts paper.
                    </p>
                    <table class="dataset_header_spotify">
                        <tbody>
                            <tr>
                                <td>pitch_mean</td>
                                <td>pitch_variance</td>
                                <td>timbre_mean</td>
                                <td>timbre_variance</td>
                            </tr>
                            <tr>
                                <td>intensity_mean</td>
                                <td>intensity_variance</td>
                                <td>rhythm_mean</td>
                                <td>rhythm_variance</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Now, for getting the data, I used the already classified playlists that were generated by Spotify.
                        Spotify has created playlists, whether auto-generated or manually created, for sad, calm, and happy music.
                        However, energetic music was slightly harder to find since it is not a standard or popular way of describing
                        music. 
                    </p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={SpotifyHappy} alt=""></img>
                        <img class="spotifyHalfImage" src={SpotifySad} alt=""></img>
                        <img class="spotifyHalfImage" src={SpotifyCalm} alt=""></img>
                    </div>
                    <p>What I decided to label as energetic music was workout music.</p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={SpotifyEnergetic} alt=""></img>
                    </div>
                    <p>For labelling, I would assign a mood for an entire playlist. For example, in the first image, and the playlists
                    shown would be classified as "sad". In total, I collected about 6000 songs for my training and validation sets.</p>
                    <h2>Data Exploration</h2>
                    <p>It was in the data exploration section of this project where I discovered the need to constantly
                        refine my dataset. In my initial data collection, I had not yet decided 
                    </p>
                    
                    <p>I first tried working with the second dataset that included data regarding pitch, intensity, rhythm, and timbre of each
                    track. However, I soon realized that it was hard to differentiate the moods. Shown below are the scatterplots of each combination of features, all of which
                    have significant overlap between the moods.</p>
                    <img class="spotifyFullImage" src={dataset2pairplot} alt=""></img>
                    <p>Because of this, I decided not to continue with this dataset. There were no clusters that were forming visually, so I
                    concluded that it would be also hard to create clusters through machine learning. When this dataset is fitted to a Random Forest model,
                    it can only reach a score of 48%  with significant overfitting.</p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={dataset2DecisionTreeConfusionMatrix} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset2DecisionTreeOverfitting} alt=""></img>
                    </div>

                    <p>I, however, found greater success with the first dataset that included Spotify's preprocesesed data. Shown below
                    are the Kernal Density Estimations of each of the relevant features of the dataset.</p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyKDEImage" src={dataset3KDE1} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE2} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE3} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE4} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE5} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE6} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE7} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE8} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE9} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE10} alt= ""></img>
                        <img class="spotifyKDEImage" src={dataset3KDE11} alt= ""></img>
                    </div>
                    <h2>Model Creation</h2>
                    <p>Two different models were fitted with the data: <strong>Random Forest Classifier</strong> and <strong>Stochastic Gradient Descent Classifier</strong>.</p>
                    <p>For the Random Forest model, I plotted the training and testing scores for tree depths 1-10 in order to find a balance
                        bewteen both accuracy and overfitting.
                    </p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={dataset13DecisionTreeConfusionMatrix} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset13DecisionTreeOverfitting} alt=""></img>
                    </div>
                    <p>For the SGD Classifier, rather than manually testing various hyperparameters, I decided to use
                        Scikit-Learn's Grid Search along with Cross Validation to obtain the best model.
                    </p>

                    <Highlight className='Python'>
                        {"X = songList[['acousticness','danceability','duration_ms','energy','instrumentalness','key','liveness','loudness','mode','speechiness','time_signature','valence']].to_numpy()"}<br/>
                        {"y = songList['p_mood'].to_numpy()"}<br/>
                        {"X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)"}<br/>
                        {""}<br/>
                        {"scaler = StandardScaler()"}<br/>
                        {"scaler.fit(X_train)"}<br/>
                        {"X_train = scaler.transform(X_train)"}<br/>
                        {"X_test = scaler.transform(X_test)"}<br/>
                        {""}<br/>
                        {"clf = linear_model.SGDClassifier()"}<br/>
                        {"param_grid = ["}<br/>
                        {"    {'alpha':[0.001,0.002,0.003],"}<br/>
                        {"     'max_iter':[100,150,200,250,300,350],"}<br/>
                        {"     'shuffle':[True,False],"}<br/>
                        {"     'loss':['hinge', 'log']}"}<br/>
                        {"]"}<br/>
                        {""}<br/>
                        {"grid_search = GridSearchCV(clf, param_grid, cv = 5)"}<br/>
                        {"grid_search.fit(X_train, y_train)"}<br/>
                    </Highlight>
                    <p>In the above code snippet, I both configure the Grid Search, normalize my data by fitting a Standard Scaler to my
                    training data and then applying it to both training and testing datasets. K-means Cross Validation with 5 folds is
                    then used to determine which combination of hyperparameters is the best.</p>
                    <p>The Stochastic Gradient Descent Classifier had greater accuracy across all the moods, as shown in the confusion
                        matrix below.
                    </p>

                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={dataset13SGDConfusionMatrix1} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset13SGDConfusionMatrix2} alt=""></img>
                    </div>
                    <p>There main areas the model is incorrect is falsely classifying calm music as sad, which is understandable.
                    Sad music differs from calm music in that it has slightly lower rhythm, slightly higher pitch, and slightly higher volume.
                    However, since these playlists are likely manually classified, there is prevelance of sad music
                    in the calm playlists is higher than the other playlists.</p>
                    <p>Since the SGD Classifier performed slightly better than the Random Forest Classifier, I decided to move forward with it.</p>
                    <h2>Model Tuning</h2>
                    <p>Tuning the model mostly consisted of adding more features through multiplication. I attempted to
                        joining both of the aforementioned datsets, however it did not yield significant improvements to the model's score.
                        What was more effective was combining features that formed noticable clusters in their scatter plots. Shown below are
                        a few examples of scatterplots (consisting of two given moods) and their separation.
                    </p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={dataset131} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset132} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset133} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset134} alt=""></img>
                    </div>
                    <p>This process of feature multiplication was effective in decreasing the number of false positive and false negative
                        cases. The effects are shown in the below coefficients heatmap as well as the improvements in the confusion matrix.
                    </p>
                    <img class="spotifyFullImage" src={dataset13CoefficientsHeatmap} alt=""></img>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={dataset13ConfusionMatrix1} alt=""></img>
                        <img class="spotifyHalfImage" src={dataset13ConfusionMatrix2} alt=""></img>
                    </div>
                    <p>From the coefficients heatmap, it becomes clear that the model was able to capture some of the core
                        characteristics of each of the moods. For example, calm music is slightly quieter than sad music. Sad
                        music has low energy while energetic music is on the opposite side of the spectrum. 
                    </p>
                    <p>For a final test, I created a test set that was only comprised of Spotify's playlists. In the training of my
                        model, I incorporated both user's and Spotify's playlists. However, the model performed significantly better
                        when limited to just this final test set of Spotify playlists.
                    </p>
                    <div class="spotifyImageContainer">
                        <img class="spotifyHalfImage" src={finalTest} alt=""></img>
                    </div>
                    <p>In the end, a score of 69.4% percent was achieved on this last test set, which I am quite proud of.</p>
                    <h2>Model Deployment</h2>
                    <p>Having heard about Streamlit recently, I decided to use it to create an interface in which you could interact
                        with my model. Using Pickle, I was able to save and load my model and scalar. In the Heroku App, you are
                        able to search for any track, playlist, album, or artist and it will return the sentiment asociated with it.
                    </p>
                    <p>By following this guide on <a href="https://medium.com/analytics-vidhya/how-to-deploy-a-streamlit-app-with-heroku-5f76a809ec2e">Medium</a>, I was able
                    to easily deploy my Streamlit app onto Heroku.</p>
                    <p>
                        This was definitely a fun project to take on and really helped me put into practice the machine learning principles
                        that I recently learned. 
                    </p>
                  
                </div>
            </div>
      </MathJax.Provider>
    <Footer />

  </body>
  )
  }
}

export default SpotifySentiment;
