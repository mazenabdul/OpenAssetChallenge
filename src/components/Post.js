import React, { Fragment } from 'react'
import PostItem from './PostItem'
import { useTheme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//Material UI Table Pagination
function TablePaginationActions(props) {

  const { count, page, rowsPerPage, onChangePage } = props;
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  //Computation of Pagination
  return (
    <div>
      <div className='page'>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
      </div>
    </div>
  );
}

const Post = ({ data }) => {
 
  //State to track pagination current page and posts per page
  const [page, setPage] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (  
    <Fragment>
      <div className='page'>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 50]}
          colSpan={3}
          count={data.posts.data.length}
          rowsPerPage={postsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
            }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          />
      </div>
      <div>
        {(postsPerPage > 0
          ? data.posts.data.slice(page * postsPerPage, page * postsPerPage + postsPerPage): null).map((post) => ( <PostItem post={post}/>))}
      </div>   
    </Fragment>
  )
}

export default Post
