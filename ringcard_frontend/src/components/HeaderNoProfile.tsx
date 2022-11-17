import { useState } from "react";
import "../styles/layout/headerNoProfile.css";
import Modal from "./Modal";

function HeaderUser() {
	const handleHomeBtnClick = async () => {
		window.location.href = "/home/unanswered";
	};

	// 모달창 노출 여부 state
	const [showReq, setShowReq] = useState<boolean>(false);

	function openReq() {
		setShowReq(!showReq);
	}

	function closeReq() {
		setShowReq(!showReq);
	}

	return (
		<div className="header-user">
			<div className="header-blank-user"></div>
			<div className="top-banner-user">
				<img
					alt=""
					src="/buttons/home-icon.svg"
					width="21px"
					color="white"
					onClick={handleHomeBtnClick}
				/>
				<img
					alt=""
					src="/buttons/menu-icon.svg"
					width="21px"
					color="white"
					onClick={openReq}
				/>
			</div>
			<Modal open={showReq} close={closeReq} />
			<div className="profile-pic-large-top-blank"></div>
			<div className="profile-pic-large">
				<img alt="" src="/profile.png" width="77px" color="white" />
			</div>
			<div className="profile-pic-larg-name">김지연</div>
			<div className="profile-pic-blank"></div>
		</div>
	);
}

export default HeaderUser;
