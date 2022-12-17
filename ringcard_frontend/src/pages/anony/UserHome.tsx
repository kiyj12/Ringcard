import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionNoteListAnony from "../../components/QuestionNoteListAnony";
import SendQuestionForm from "../../components/SendQuestionFormUserHome";
import "../../styles/layout/layout.css";
import "../../styles/userHome.css";

import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAnswer, IQuestion } from "../../components/types";
import HeaderNoProfile from "../../components/Header/HeaderNoProfile";

function UserHome() {
	const params = useParams();
	const userName = String(params.userName);
	const [userRingcardName, setUseRingcardrName] = useState<String>();

	const [map, setMap] = useState<[IQuestion, IAnswer][]>();

	const [totalPages, setTotalPages] = useState<Number>(0);
	const [pageNumber, setPageNumber] = useState<Number>(0);
	const questionId = "dummy";
	// const { page } = useParams();

	useEffect(() => {
		axios
			.get("/userHome/" + userName + "/0")
			.then((res) => {
				console.log(res.data);
				setUseRingcardrName(res.data.userRingcardName);
				setMap(res.data.map);
				setTotalPages(res.data.pageInfo.totalPages);
				setPageNumber(res.data.pageInfo.number + 1);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function BtnToViewMore() {
		function handleClick(e: any) {
			const newPage = pageNumber;
			console.log("newPage=" + newPage);
			console.log("pageNumber=" + pageNumber);
			if (totalPages === undefined) {
			} else if (newPage >= totalPages) {
			} else {
				axios
					.get("/userHome/" + userName + "/" + newPage)
					.then((res) => {
						console.log(res.data);
						const b: [[IQuestion, IAnswer]] = res.data.map;
						// [IQuestion, IAnswer]
						// 새로운 맵에 넣고, 그 맵을 다시 setMap 하자.
						let mapTemp = [];
						if (map) {
							for (let idx = 0; idx < map.length; idx++) {
								mapTemp.push(map[idx]);
							}
						}
						if (b) {
							for (let idx = 0; idx < b.length; idx++) {
								mapTemp.push(b[idx]);
							}
						}

						if (mapTemp) {
							setMap(mapTemp);
						}

						setTotalPages(res.data.pageInfo.totalPages);
						setPageNumber(res.data.pageInfo.number + 1);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
		return (
			<div>
				{map ? (
					<div>
						{map.length > 0 ? (
							<div>
								{totalPages === pageNumber ? undefined : (
									<div className="UserHome-viewMore-btn-container">
										<div className="UserHome-viewMore-btn-section">
											<button
												className="UserHome-viewMore-btn"
												onClick={handleClick}
											>
												+ 더보기
											</button>
										</div>
									</div>
								)}
							</div>
						) : null}
					</div>
				) : null}
			</div>
		);
	}

	return (
		<div className="container">
			<HeaderNoProfile />

			<div className="contents-container block">
				<div className="UserHome-profile-box">
					<img src="/profile-imgs/oring_1.png" alt="" />
					<div className="UserHome-profile-username">
						{userRingcardName}
					</div>
				</div>
				<div className="UserHome-SendQuestionForm-container">
					<SendQuestionForm userName={userName} />
				</div>

				<div className="UserHome-questionlist-box">
					<div className="UserHome-down-background-img">
						<div style={{ height: "30px" }}></div>
						<div>
							{map ? (
								<QuestionNoteListAnony questionId={questionId} map={map} />
							) : undefined}
						</div>
						<BtnToViewMore />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserHome;
