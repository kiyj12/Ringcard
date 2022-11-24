import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { IQuestion } from "./types";


import QuestionNote from "./QuestionNote";

export interface Props {
	questionList: IQuestion[];
}

function QuestionList(props: Props) {
	return (
		<>
			<div className="question-notes-container">
				{props.questionList.map((question, idx) => (
					<QuestionNote key={idx} idx={idx} question={question} />
				))}
			</div>
		</>
	);
}

export default QuestionList;
