import React, { useState } from 'react';
import './bse321a.css';

const CoursePage = () => {
  // Define state for comment text, discussion topics, new topic input, and current topic
  const [commentText, setCommentText] = useState('');
  const [topics, setTopics] = useState([
    { id: 1, title: 'Find a group/team', comments: [] },
    { id: 2, title: 'Difficulty for undergrads ', comments: [] },
  ]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [newTopicName, setNewTopicName] = useState('');

  // Handle change in comment text
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  // Handle submitting comment
  const handleSubmitComment = () => {
    if (currentTopic !== null && commentText.trim() !== '') {
      const updatedTopics = topics.map((topic) => {
        if (topic.id === currentTopic) {
          return {
            ...topic,
            comments: [...topic.comments, { text: commentText, user: 'User' }],
          };
        }
        return topic;
      });
      setTopics(updatedTopics);
      setCommentText('');
    }
  };

  // Handle selecting a topic
  const handleTopicSelect = (topicId) => {
    setCurrentTopic(topicId);
  };

  // Handle change in new topic name input
  const handleNewTopicNameChange = (e) => {
    setNewTopicName(e.target.value);
  };

  // Handle submitting new topic
  const handleSubmitNewTopic = (e) => {
    e.preventDefault();
    if (newTopicName.trim() !== '') {
      const newTopic = {
        id: topics.length + 1,
        title: newTopicName,
        comments: [],
      };
      setTopics([...topics, newTopic]);
      setCurrentTopic(newTopic.id); // Automatically select the newly added topic
      setNewTopicName('');
    }
  };

  return (
    <div className="outerBox">
        <div className="container course-box">
            <div className="course-info">
                {/* Course information section */}
                <h2>Course Information</h2>
                {/* Add course information here */}
                <p><strong>Course Title:</strong> BSE321 Structural Biology</p>
                <p><strong>Instructor:</strong> ARUN KUMAR SHUKLA, Appu Singh</p>
                <p><strong>Course Description:</strong> Part I Principles of Protein Structure from primary sequence to three dimensional structures. Elementary ideas of bonding and structure. The building blocks. Motifs of Protein structure. Prediction, design and engineering of protein structures. Part II The Structural Basis of Protein Function. Four fundamental biochemical functions of proteins, Recognition, Complimentarily and Active Sites. Flexibility and Protein Function, Location and nature of Binding Sites, Functional Properties of, Structural Proteins, Catalysis: Overview, Active Site Geometry, Proximity and Ground State Destabilization, Stabilization of Transition States, Active Site Chemistry. Control of Protein Function. Mechanisms of Regulation. Part Ill Determination of 3DStructures using X-ray crystallography an overview of the method. Laboratory experiments protein preparation for crystallization experiments, protein crystallization, Evaluating the quality of crystals, Cryoprotecting crystals at low temperature for data collection. X-ray diffraction data collection and processing a demonstration session.</p>
                <p><strong>Prerequisites:</strong> ESO206</p>
                <p><strong>Course Duration:</strong> 13 weeks</p>
                <p><strong>Course Schedule:</strong> Tuesday 15-16, Thursday 15-16, Friday 14-16</p>
            </div>
            <div className="reviews">
                {/* Reviews section */}
                <h2>Reviews</h2>
                {/* Add review components here */}
                <div className="review">
                    <h3>Excellent Course!</h3>
                    <p>This course provided a comprehensive overview of software engineering principles and operations. The instructor was very knowledgeable and the assignments were challenging but rewarding.</p>
                    <p><strong>Rating:</strong> 5/5</p>
                    <p><strong>Posted By:</strong> Amit</p>
                </div>
                <div className="review">
                    <h3>Highly Recommend!</h3>
                    <p>I thoroughly enjoyed this course and learned a lot. The topics were well-structured and the hands-on projects helped reinforce key concepts.</p>
                    <p><strong>Rating:</strong> 4.5/5</p>
                    <p><strong>Posted By:</strong> Ritesh</p>
                </div>
            </div>
            <div className="discussion">
                {/* Discussion forum section */}
                <h2>Discussion Forum</h2>
                {/* List of discussion topics */}
                <ul className="discussion-topics">
                    {topics.map((topic) => (
                        <li key={topic.id} onClick={() => handleTopicSelect(topic.id)}>
                            <span className="arrow">&#9654;</span> {/* Arrow */}
                            <span className="topic-name">{topic.title}</span>
                        </li>
                    ))}
                </ul>

                {/* Form for adding new topic */}
                <form onSubmit={handleSubmitNewTopic}>
                    <input
                        type="text"
                        value={newTopicName}
                        onChange={handleNewTopicNameChange}
                        placeholder="Enter new topic name"
                    />
                    <button type="submit">Add Topic</button> {/* Move the button inside the form */}
                </form>
                {/* Selected topic and comments */}
                
                {currentTopic !== null && (
                    <div className="topic-comments-container">
                        <h3>
                            <span className="topic-name chat">{topics.find((topic) => topic.id === currentTopic).title}</span>
                        </h3>
                        <div className="topic-comments">
                            {/* List of comments for the selected topic */}
                            <div className="comments">
                                {topics
                                    .find((topic) => topic.id === currentTopic)
                                    .comments.map((comment, index) => (
                                        <div key={index} className="comment-box">
                                            <strong>{comment.user}:</strong> {comment.text}
                                        </div>
                                    ))}
                            </div>
                            {/* Textarea for entering comments */}
                            <textarea
                                value={commentText}
                                onChange={handleCommentChange}
                                placeholder="Enter your comment"
                            ></textarea>
                            {/* Button to submit comment */}
                            <button onClick={handleSubmitComment}>Submit Comment</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

};

export default CoursePage;