 <div class="card shadow mb-4">
<!--                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Clients</h6>
                            
                        </div>-->
<div class="card-header py-3">
   
  <div class="row">
    <div class="col-md-4">
       <h4 class="m-0 font-weight-bold text-primary">Users</h4>
    </div>
      <div class="col-md-4">
           <?php
                    $this->load->helper('form');
                    $error = $this->session->flashdata('error');
                    if($error)
                    {
                ?>
          <div class="alert alert-danger alert-dismissable" style="padding-top: 0.2rem;
    padding-right: 0.5rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('error'); ?>                    
                </div>
                <?php } ?>
                <?php  
                    $success = $this->session->flashdata('success');
                    if($success)
                    {
                ?>
          <div class="alert alert-success alert-dismissable" style="padding-top: 0.2rem;
    padding-right: 0.5rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <?php echo $this->session->flashdata('success'); ?>
                </div>
                <?php } ?>
                
                
      </div>
    <div class="col-md-4 float-right">
      
        <a href="<?=base_url('adduser');?>" class="btn btn-primary float-right" style="margin-left: 1em">Add</a>
        
     </div>
  </div>
</div>
                        <div class="card-body">
                           
                        
                            <div class="table-responsive my-8">
                                <table class="table table-bordered" id="UdataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th width="5%">S.No</th>
                                            <th width="20%">Name</th>
                                            <th width="20%">Username</th>
                                            <th width="25%">Email</th>
                                            <th>Role</th>
                                            <th width="15%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 
                                        $sno=1;
                                        
                                        foreach ($usr as $r){ 
                                            $permissions=json_decode($this->session->userdata('permissions'), true);
                                            ?>
                                        <tr>
                                            <td><?=$sno?></td><td><?=$r->name?></td><td><?=$r->username?></td><td><?=$r->email?></td><td><?php if($r->role_id=="2") { echo "Manager";} ?></td>
                                            <td>
                                            <?php if (array_key_exists("useredit", $permissions)){ ?>
                                                <a class='btn btn-primary btn-sm' href='edituser/<?=$r->id?>'><i class='fas fa-edit'></i></a>&nbsp;&nbsp;&nbsp;
                                                <?php } ?>
                                                <?php if (array_key_exists("userdelete", $permissions)){ ?>
                                                <a class='btn btn-danger btn-sm' href="#" data-href='deluser/<?=$r->id?>' data-toggle="modal" data-target="#confirm-delete"><i class='fas fa-trash-alt'></i></a>
                                                <?php } ?>
                                            </td>
                                        </tr>
                                        <?php $sno=$sno+1;}?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
