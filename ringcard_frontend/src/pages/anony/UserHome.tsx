import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import QuestionNoteList from "../../components/QuestionNoteListAnony";
import SendQuestionForm from "../../components/SendQuestionForm";
import "../../styles/layout/layout.css";
import "../../styles/userHome.css";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IAnswer, IQuestion } from "../../components/types";

function UserHome() {
	const params = useParams();
	const userName = String(params.userName);
	const [user, setUser] = useState<any>([]);
	const [map, setMap] = useState<[[IQuestion, IAnswer]]>();

	useEffect(() => {
		axios
			.get("/userHome/" + userName)
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				setMap(res.data.map);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<HeaderNoProfile />

			<div className="contents-container block">
				<div className="UserHome-profile-box">
					<img src="/profile.png" alt="" />
					<div className="UserHome-profile-username">
						{user.userRingcardName}
					</div>
				</div>
				<SendQuestionForm userName={userName} />

				<div className="UserHome-questionlist-box">
					<div className="UserHome-down-background-img">
						{map ? <QuestionNoteList map={map} /> : undefined}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserHome;
