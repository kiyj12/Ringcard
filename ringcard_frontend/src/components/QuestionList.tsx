import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Question from "./FooterUnansweredQuestion";
import { IQuestion } from "./types";
import "../styles/question.css";
import QuestionFooter from "./FooterUnansweredQuestion";

export interface Props {
	questionList: IQuestion[];
	homeTabName: string;
}

function QuestionList(props: Props) {
	return (
		<>
			<div className="question-notes-container">
				{props.questionList.map((question, idx) => (
					<div
						className="question-note"
						key={idx}
						style={{
							backgroundImage: `url("/notes/yellow-note.png")`,
						}}
					>
						<div className="note-header"></div>
						<div className="note-contents">
							<div>{question.questionContents}</div>
						</div>
						<hr className="note-hr" />
						<QuestionFooter question={question} />
					</div>
				))}
			</div>
		</>
	);
}

export default QuestionList;
