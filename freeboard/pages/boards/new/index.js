import BoardWrite from '../../../src/components/unit/board/write/BoardWrite.container'
import withAuth from '../../../src/hoc/withAuth'

const BoardWritePage = () => {
  return <BoardWrite />
}

export default withAuth(BoardWritePage, null)
