<div class="card shadow mb-4">
<!--                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Clients</h6>
                            
                        </div>-->
<form class="well form-horizontal" action="<?=base_url('update_stype');?>" method="post"  id="contact_form">
<div class="card-header py-3">
  <div class="row">
    <div class="col-md-10">
       <h4 class="m-0 font-weight-bold text-primary">Edit SubType</h4>
    </div>
    <div class="col-md-2 float-right">
        <input type="submit" class="btn btn-primary float-right" style="margin-left: 1em" value="Update"/><a href="<?=base_url('stype');?>" class="btn btn-primary float-right" style="margin-left: 1em">Back</a>
     </div>
  </div>
</div>
<div class="form-row my-8">
<div class="form-group col-md-12 offset-md-3">
  <label class="col-md-6 control-label">Policy Type</label>  
  <div class="col-md-6 inputGroupContainer">
  <div class="input-group">
  <select class="form-control" required="required" id="pytype" name="pytype">
  <option value="">Select Policytype</option>
  <?php
                                                    if(!empty($pytype))
                                                    {
                                                        foreach ($pytype as $r)
                                                        {
                                                            ?>
                                                            <option value="<?php echo $r->pid ?>" <?php if($r->pid==$stype->pid) {echo "selected=selected";} ?>><?php echo $r->pytype ?></option>
                                                            <?php
                                                        }
                                                    }
                                                      ?>
                                                      </select>
  </div>
  </div>
</div>
</div>

<div class="form-row my-8">
<div class="form-group col-md-12 offset-md-3">
  <label class="col-md-6 control-label">Sub Type</label>  
  <div class="col-md-6 inputGroupContainer">
  <div class="input-group">
      <input name="sid" value="<?=$stype->sid?>" type="hidden">
      <input name="stype" placeholder="SubType" class="form-control" value="<?=$stype->stype?>" required="required" type="text">
    </div>
  </div>
</div>
</div>

</form>
<div class="form-row justify-content-md-center"> 
     <div class="col-md-4">
                <?php
                    $this->load->helper('form');
                    $error = $this->session->flashdata('error');
                    if($error)
                    { 
                ?>
                <div class="alert alert-danger alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('error'); ?>                    
                </div>
                <?php } ?>
                <?php  
                    $success = $this->session->flashdata('success');
                    if($success)
                    {
                ?>
                <div class="alert alert-success alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('success'); ?>
                </div>
                <?php } ?>
                
                <div class="row">
                    <div class="col-md-12">
                        <?php echo validation_errors('<div class="alert alert-danger alert-dismissable">', ' <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>'); ?>
                    </div>
                </div>
            </div>
</div>
 </div>