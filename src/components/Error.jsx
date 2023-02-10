import React from "react";

function Error({ errorMsg }) {
	return (
		<div className="bg-red-800 text-white w-full text-center p-3 mb-5 rounded-md font-semibold text-lg">
            {errorMsg}
        </div>
	);
}

export default Error;
