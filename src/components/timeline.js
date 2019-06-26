import React from 'react';
import styles from'../css/timeline.module.css';



  class TimelineItem extends React.Component {
    render() {
      const {posts} = this.props; // ES6 destructuring
      return (
        <div className="content">
            
            {posts.map((post) => {
                return (
                <div className={styles.post}>
                <img className = {styles.img} src ={post.img}></img>
                <h1 className={styles.title}> {post.title}</h1>
                <p className={styles.description}> {post.description}</p>
                </div>
                );
            })}
            
        </div>
      )
    }
  }
  export default TimelineItem;
