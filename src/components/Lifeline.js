import React from 'react';
import styled from '@emotion/styled';


const Heading = styled.h2(
    {
        fontsize: 42,
        color: 'green'
    },
)
const Subheading = styled.h3(
    {
        fontsize: 30,
        color: 'aqua',
    },
)
const Paragraph = styled.p(
    {
      fontSize: 18, 
      color: 'blue',
    },
)
const Section = styled.section(
    {
    'align': 'center',
    'text-align': 'center',
    }
)
  const Book = ({ title, timeperiod, story,}) => {
  
    return ( 
      <Section>
        <Heading>{title}</Heading>
        <Subheading>by: {timeperiod}</Subheading>
        <Paragraph>{story}</Paragraph>
      </Section>
     );
  }

  //dynamically rendered components must have a unique id.  This is how its done.
  class Lifeline extends React.Component {
    state = {
      open: false,
      hiring: false, 
      data: [],
      loading: false,
      } //is the same as this.stae
    
    //This is a good place to fetch data from RestAPI
  
    componentDidMount(){
      this.setState({loading: true});
      fetch('https://hplussport.com/api/products/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
    }
    componentDidUpdate(){
  
    }
    render() { 
      console.log(this.state);
      const {books: stories} = this.props;
      return ( 
        <div>
          {stories.map(
            (story,i) => 
              <Book 
                key={i} 
                title={story.title} 
                timeperiod={story.timeperiod} 
                story={story.story}
               >
                {/* state can be passed down as props */}
              </Book>
          )}
       </div>
       );
    }
  }

 
export default Lifeline;