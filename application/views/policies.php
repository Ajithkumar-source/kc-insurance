 <div class="card shadow mb-4">
<!--                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Clients</h6>
                            
                        </div>-->
<div class="card-header py-3">
   
  <div class="row">
    <div class="col-md-10">
       <h4 class="m-0 font-weight-bold text-primary">Policy Management</h4>
    </div>
    <div class="col-md-2 float-right">
      
        <a href="<?=base_url('addpolicy');?>" class="btn btn-primary float-right" style="margin-left: 1em">Add Policy</a>
        
     </div>
  </div>
</div>
                        <div class="card-body">
                            
                            <form class="mb-15">
											<div class="row mb-6">
												
                                            
                                                <div class="col-lg-2 mb-lg-0 mb-6">
													<label><b>Policy Number</b></label>
                                                                                                        <input type="text" class="form-control datatable-input" id="pno" placeholder="" data-col-index="0">
												</div>


                                                <div class="col-lg-3 mb-lg-0 mb-6">
													<label><b>Insurance Company</b></label>
                                                    <select class="form-control datatable-input"  id="inscompany" name="inscompany" placeholder="" data-col-index="1" >  
                                              <option value="">Select Company</option> 
       <?php
                                            if(!empty($inscompany))
                                            {
                                                foreach ($inscompany as $r)
                                                {
                                                    ?>
                                                    <option value="<?php echo $r->inscompany ?>" /><?php echo $r->inscompany ?></option>
                                                    <?php
                                                }
                                            }
                                            ?>
                                           

                            
</select>


                                        </div>





												<div class="col-lg-3 mb-lg-0 mb-6">
													<label><b>Insured Name</b></label>
                                                    <select class="form-control datatable-input"  id="insname"  name="insname"  placeholder="" data-col-index="2">  
                                                    <option value="">Select Name</option> 
                                               <?php
                                            if(!empty($name))
                                            {
                                                foreach ($name as $r)
                                                {
                                                    ?>
                                                    <option value="<?php echo $r->name ?>" /><?php echo $r->name ?></option>
                                                    <?php
                                                }
                                            }
                                            ?>
                                           

                                           
</select>  
												</div>


                                                <div class="col-lg-3 mb-lg-0 mb-6">
                                                <label><b>Careof</b></label>
                                                <select class="form-control datatable-input"  id="careof" name="careof" placeholder="" data-col-index="3" >
                                                <option value="">Select Careof</option>
                                                
                                            <?php
                                            if(!empty($cname))
                                            {
                                                foreach ($cname as $r)
                                                {
                                                    ?>
                                                    <option value="<?php echo $r->name ?>" /><?php echo $r->name ?></option>
                                                    <?php
                                                }
                                            }
                                            ?>
                                           
                                               </select>
                                        </div>                                                                  
												<div class="col-lg-2 mb-lg-0 mb-6">
													<label><b>Mobile</b></label>
                                                                                                        <input type="number" class="form-control datatable-input" id="mobile" placeholder="" data-col-index="4">
												</div>
                                                                                         
												<div class="col-lg-2 mb-lg-0 mb-6">
													<label><b>Representative</b></label>
                                                    <select class="form-control datatable-input"  id="rep" name="rep" placeholder="" data-col-index="5" >
                                                <option value="">Select Representative</option>
                                                
                                            <?php
                                            if(!empty($rep))
                                            {
                                                foreach ($rep as $r)
                                                {
                                                    ?>
                                                    <option value="<?php echo $r->rname ?>" /><?php echo $r->rname ?></option>
                                                    <?php
                                                }
                                            }
                                            ?>
                                            <select>
												</div>
                                                
											</div>
											
											<div class="row mt-8">
												<div class="col-lg-12">
												
												<button class="btn btn-secondary btn-secondary--icon" id="kt_reset">
													<span>
														<i class="la la-close"></i>
														<span>Reset</span>
													</span>
												</button></div>
											</div>
										</form>
                        
                            <div class="table-responsive my-8">
                                <table class="table table-bordered" id="PdataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Policy ID</th>
                                            <th>Policy Number</th>
                                            <th>Policy Type</th>
                                            <th>Policy&nbsp;From</th>
                                            <th>Policy&nbsp;To</th>
                                            <th>Insurance Company</th>
                                            <th>Insured Name</th>
                                            <th>Careof</th>
                                            <th>Mobile</th>
                                            <th>Vehicle No</th>
                                            <th>Make</th>
                                            <th>Model</th>
                                            <th>Non-Motor Type</th>
                                            <th>Representative </th>
                                            <th>Receipt No</th>
                                            <th>Receipt Date</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Remarks</th>
                                            <th>Sub Type</th>
                                            <th>OD Premium</th>
                                            <th>TP Premium</th>
                                            <th>Premium Without Tax</th>
                                            <th>Service tax</th>
                                            <th>Total premium</th>
                                            <th>service charge</th>    
                                            <th> Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
