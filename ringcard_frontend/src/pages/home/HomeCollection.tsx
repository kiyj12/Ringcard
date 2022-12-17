import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useSearchParams } from "react-router-dom";

function HomeCollection() {
	const [userName, setUserName] = useState<String>();

	const [searchParams] = useSearchParams();
	const page = searchParams.get("page");
	const [questionList, setQuestionList] = useState<any[]>([]);
	const [totalPages, setTotalPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState(0);
	const pageAddress = "collection";

	useEffect(() => {
		axios
			.get("/home/" + pageAddress + "?page=" + page)
			.then((res) => {
				console.log(res.data);
				setUserName(res.data.userName);
				setQuestionList(res.data.questions.content);
				setTotalPages(res.data.questions.totalPages);
				setPageNumber(res.data.questions.number);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<Header userName={userName} />
			<Navigation
				page={page}
				pageAddress={pageAddress}
				totalPages={totalPages}
				pageNumber={pageNumber}
			/>
			<div className="container-body">
				<QuestionNoteList questionList={questionList} />
			</div>
		</div>
	);
}

export default HomeCollection;
