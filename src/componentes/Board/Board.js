import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

  const Board = ({animating, handleMemoClick, memoBlocks}) => {
  return (
    <main className="board">
      {memoBlocks.map( (memoBlock, i) =>{
        return <MemoBlock key={`${i}_${memoBlock.emoji}`} memoBlock={memoBlock} animating={animating} handleMemoClick={handleMemoClick}/>
      })}

    </main>
  )


}

export default Board;