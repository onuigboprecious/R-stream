import React from 'react'
import '././media/Media.css';

const Trans = () => {
  return (
    <div className="trans">
      An error will undo all changes made to the state during a transaction. You
      can throw an error by calling require, revert or assert. require is used
      to validate inputs and conditions before execution. revert is similar to
      require. Use it for exceptional condition such as user not authorized.
      assert is used to check for code that should never be false.
      transcrpit
    </div>
  );
}

export default Trans;