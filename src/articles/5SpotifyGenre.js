import React, { Component } from 'react';

import './Articles.css';
import './4SpotifySentiment.css';
import Header from '../pages/components/Header.jsx';
import Footer from '../pages/components/Footer.jsx';
import Highlight from 'react-highlight';

import MathJax from 'react-mathjax';

import ArticleImage from './graphs4/spotify.png';

import styles from './SpotifyGenre.module.css';

class SpotifyGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNum: 0,
      color: ['black', 'black'],
      dataOne: [],
    };
    this.child = React.createRef();
  }

  componentDidMount() {}
  render() {
    return (
      <body class="container">
        <Header pageNum={5} />
        <MathJax.Provider>
          <div class="everything">
            <h1 id="article-title">Spotify Genre Classifier</h1>
            <img class="article-image" src={ArticleImage} alt="" />
            <div class="article-content">
              <h2>Final Product</h2>
              <p>64.98% accuracy on final one</p>
              <h2>Introduction</h2>
              <p>
                After completing the Spotify Sentiment Classifier project, I
                felt that there was a lot of room for improvement. Using
                Spotify's built in features in their API made me feel like I was
                bypassing an important part of Machine Learning: feature
                engineering. Thus, I decided to create this multi-part project
                with a greater emphasis on feature engineering.
              </p>
              <p></p>
              <Highlight className="Python">
                {
                  "X = songList[['acousticness','danceability','duration_ms','energy','instrumentalness','key','liveness','loudness','mode','speechiness','time_signature','valence']].to_numpy()"
                }
                <br />
                {"y = songList['p_mood'].to_numpy()"}
                <br />
                {
                  'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)'
                }
                <br />
                {''}
                <br />
                {'scaler = StandardScaler()'}
                <br />
                {'scaler.fit(X_train)'}
                <br />
                {'X_train = scaler.transform(X_train)'}
                <br />
                {'X_test = scaler.transform(X_test)'}
                <br />
                {''}
                <br />
                {'clf = linear_model.SGDClassifier()'}
                <br />
                {'param_grid = ['}
                <br />
                {"    {'alpha':[0.001,0.002,0.003],"}
                <br />
                {"     'max_iter':[100,150,200,250,300,350],"}
                <br />
                {"     'shuffle':[True,False],"}
                <br />
                {"     'loss':['hinge', 'log']}"}
                <br />
                {']'}
                <br />
                {''}
                <br />
                {'grid_search = GridSearchCV(clf, param_grid, cv = 5)'}
                <br />
                {'grid_search.fit(X_train, y_train)'}
                <br />
              </Highlight>
              <h2>Part 1 - Photo</h2>
              <h3>Data Collection</h3>
              <div className="row_flex">
                <img
                  style={{
                    width: '25%',
                    minWidth: '200px',
                    maxHeight: '200px',
                  }}
                  src={require('./graphs5/1data1.jpeg')}
                />
                <p style={{ flex: '2', paddingLeft: '20px' }}>
                  Collecting the album cover image was relatively easy using the
                  Spotify API. A direct link to the URL was provided. The
                  smallest size, 64x64 pixels, was turned into a 64x64x3 matrix
                  that represented its RGB values. From there, the matrix was
                  resized into a 1D array in order to be stored in the Pandas
                  DataFrame.
                </p>
                <p>
                  Using randomized PCA, the 12,288 features were reduced to 652
                  principal components while 95%
                </p>
              </div>
              <h3>Model Creation</h3>
              <div className="row_flex" style={{ justifyContent: 'center' }}>
                <div class="image_container">
                  <p className={styles.photo_label}>
                    KNN Accuracy vs # of Neighbors
                  </p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/1modelKNN1.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/1modelKNN2.png')}
                  />
                </div>
              </div>
              <h2>Part 2 - Audio</h2>
              <h3>Data Collection</h3>
              <h3>Model Creation</h3>
              <h2>Part 3 - Lyrics</h2>
              <h3>Data Collection</h3>
              <div className="row_flex" style={{ justifyContent: 'center' }}>
                <div class="image_container">
                  <p className={styles.photo_label}>
                    KNN Accuracy vs # of Neighbors
                  </p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3data1.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3data2.png')}
                  />
                </div>
              </div>
              <h3>Model Creation</h3>
              <div className="row_flex" style={{ justifyContent: 'center' }}>
                <div class="image_container">
                  <p className={styles.photo_label}>
                    KNN Accuracy vs # of Neighbors
                  </p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3modelGNB1.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3modelGNB2.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3modelRFC1.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3modelRFC2.png')}
                  />
                </div>
                <div class="image_container">
                  <p className={styles.photo_label}>KNN Confusion Matrix</p>
                  <img
                    style={{ width: '100%' }}
                    src={require('./graphs5/3modelSGD1.png')}
                  />
                </div>
              </div>
            </div>
          </div>
        </MathJax.Provider>
        <Footer />
      </body>
    );
  }
}

export default SpotifyGenre;
