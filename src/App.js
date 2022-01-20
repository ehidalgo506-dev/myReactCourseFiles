import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetails';

function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45pm'
          text='Ex amet laboris dolor irure cupidatat quis.'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00am'
          text='Nulla amet sunt esse in est magna esse non.'
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 10:00pm'
          text='Labore tempor dolor id mollit ea eu nulla do ad.'
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
