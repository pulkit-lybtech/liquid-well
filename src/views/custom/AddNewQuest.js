import { CCard, CCardBody, CCol,CCardHeader, CRow,CInputFile } from '@coreui/react'
import React from 'react'

export default function AddNewQuest() {
	return (
		<>
			
		<CCard>
			<CRow>
				<CCol lg="6">
					<CCardHeader className="border-bottom-0">
						<h3 className="card-title mb-0">Add a New Question </h3>
					</CCardHeader>
					<CCardBody>
						<div className="form-group">
							<label htmlFor="quest">Enter a Question and select an answer below </label>
							<textarea className="form-control" name="quest" id="quest" cols="6" rows="10"></textarea>
						</div>
						<div className="form-group border rounded">
							<span className="position-absolute">
							Select a Video File
							</span>
							<CInputFile title="Select a Video" size="sm" type="file" custom="false" />
						</div>
						<div className="form-group mt-4">
							<h5 className="h6 text-muted mb-4">
								Please enter 4 answers and select the right one.
							</h5>
							
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<input name="answer-right" type="radio" />
									</div>
									</div>
								<input type="text" class="form-control"  />
							</div>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<input name="answer-right" type="radio" />
									</div>
									</div>
								<input type="text" class="form-control"  />
							</div>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<input name="answer-right" type="radio" />
									</div>
									</div>
								<input type="text" class="form-control"  />
							</div>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<input name="answer-right" type="radio" />
									</div>
									</div>
								<input type="text" class="form-control"  />
							</div>
							<div className="">
								<button className="btn btn-primary btn-lg ">
									Save  
								</button>
							</div>
						</div>

					</CCardBody>
				</CCol>
				<CCol lg="3">
					<div className="card-body pt-5 mt-5">
						<div class="custom-control mb-3 custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck1" />
							<label class="h5 mb-0 custom-control-label" for="customCheck1">P. Test </label>
						</div>
					
						<div class="custom-control mb-3 custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck" />
							<label class="h5 mb-0 custom-control-label" for="customCheck">P. D </label>
						</div>
						<div class="custom-control mb-3 custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck3" />
							<label class="h5 mb-0 custom-control-label" for="customCheck3">V</label>
						</div>
						<div class="custom-control mb-0 custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck4" />
							<label class="h5 mb-0 custom-control-label" for="customCheck4">HR </label>
						</div>
						<hr />
					</div>
						
					<div className="card-body">
						<h4 className="card-title mb-4">Select a Level </h4>
						<div class="custom-control mb-3 custom-radio">
							<input type="radio" class="custom-control-input" id="beg" name="radio-stacked" required />
							<label class="h5 mb-0 custom-control-label" for="beg">Beginner</label>
						</div>
						<div class="custom-control mb-3 custom-radio">
							<input type="radio" class="custom-control-input" id="beg1" name="radio-stacked" required />
							<label class="h5 mb-0 custom-control-label" for="beg1">Intermediate</label>
						</div>
						<div class="custom-control custom-radio">
							<input type="radio" class="custom-control-input" id="beg2" name="radio-stacked" required />
							<label class=" h5 mb-0 custom-control-label" for="beg2">Professional </label>
						</div>
						<hr />
					</div>
					<div className="card-body pb-5">
						<h4 className="card-title mb-4">Select Pricing  </h4>
						<div class="custom-control mb-3 custom-radio">
							<input type="radio" class="custom-control-input" id="beg" name="pricing " required />
							<label class="h5 mb-0 custom-control-label" for="beg">Free </label>
						</div>
						<div class="custom-control custom-radio">
							<input type="radio" class="custom-control-input" id="beg2" name="pricing " required />
							<label class=" h5 mb-0 custom-control-label" for="beg2">Paid </label>
						</div>
						<hr />
					</div>
				</CCol>
			</CRow> 	
		</CCard>
				
		</>
	)
}
