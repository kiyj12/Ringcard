import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/editPassword.css";
import HeaderUser from "../../components/HeaderNoProfile";

const EditPassword = () => {
	return (
		<div className="container">
			<HeaderUser></HeaderUser>
			<div>
				<div className="input-box">
					<div className="input-box-in">
						<div className="input-tag editPassword-tag">현재 비밀번호</div>
						<input
							className="input editPassword-input"
							placeholder="현재 비밀번호"
						></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					<div className="input-box-in">
						<div className="input-tag editPassword-tag">새 비밀번호</div>
						<input
							className="input editPassword-input"
							placeholder="새 비밀번호"
						></input>
					</div>

					<div className="input-box-in">
						<div className="input-tag editPassword-tag">새 비밀번호 확인</div>
						<input
							className="input editPassword-input"
							placeholder="새 비밀번호 확인"
						></input>
					</div>

					<div className="input-box-in">
						<button className="editPassword-button">
							<div className="editPassword-button-tag">비밀번호 변경하기</div>
						</button>
					</div>

					<div className="input-box-in">
						<button className="editPassword-button-cancel">
							<div className="editPassword-button-tag-cancel">
								비밀번호 변경 취소하기
							</div>
						</button>
					</div>
				</div>
			</div>
			{/* 여기에 비밀번호 찾기?? */}
			{/* <div className="editPassword-delete-box">
				<div className="editPassword-delete">
					<a className="editPassword-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default EditPassword;
