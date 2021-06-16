import React from 'react'

export default function AddNotif() {
	return (
		<div>
			<div className="row">
				<div className="col-md-8 col-lg-7">
					<div className="card">
						<div className="card-body">
							<h1>
								Add a Notification
							</h1>
							<div className="form-neg">
								<label htmlFor="#" className="form-group w-100">
									Name
									<input type="text" className="form-control w-100" />
								</label>
								<div className="form-row w-10">
									<label htmlFor="//#endregion" className="col-md-6">
										Purpose
										<input type="text" className="form-control" />
									</label>
									<label htmlFor
									="//#endregion" className="col-md-6">
										Select A Plan 
										<select className="custom-select">
											<option value="1">
												Plan A
											</option>
											<option value="1">
												Plan B
											</option>
											<option value="1">
												Plan C
											</option>
										</select>
									</label>
									<button className="btn-primary btn btn- block btn- lg">
										Send Notification 
									</button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
