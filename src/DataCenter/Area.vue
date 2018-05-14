<template>
	<div class="page-wrapper">
    	<div class="container-fluid">
    		<div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">区域数据库</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New</button>
                        </div>
                    </div>
                </div>
			<div class="row">
                <div class="col-lg-12">
                    <div class="card">
		                            <div class="card-body">
		                               <!--  <h4 class="card-title">Editable with Datatable</h4>
		                                <h6 class="card-subtitle">Just click on word which you want to change and enter</h6> -->
		                                <table class="table table-striped table-bordered" id="editable-datatable">
		                                    <thead>
		                                        <tr>
		                                            <th>区域名称</th>
		                                            <th>区域类型</th>
		                                            <th>区域负责人</th>
		                                            <th>特殊要求</th>
		                                            <th>所属部门</th>
		                                            <th>检查区域分类</th>
		                                            <th>作业区域分类</th>
		                                            <th class="text-nowrap">管理</th>
		                                        </tr>
		                                    </thead>
		                                    <tbody>
		                                        <tr id="1" class="gradeX">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="2" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="3" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="4" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="5" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="6" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="7" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="8" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="9" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="10" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="11" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="12" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="13" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="14" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="15" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="16" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="17" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="18" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="19" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="20" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="21" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="22" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="23" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="24" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="25" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="26" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="27" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="28" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="29" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="30" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="31" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="32" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="33" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="34" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="35" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="36" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="37" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="38" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="39" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="40" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="41" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="42" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="43" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="44" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="45" class="gradeA">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="46" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="47" class="gradeX">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="48" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="49" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="50" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="51" class="gradeA">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="52" class="gradeX">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="53" class="gradeX">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="54" class="gradeX">
		                                           <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="55" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="56" class="gradeC">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                        <tr id="57" class="gradeU">
		                                            <td class="center">长风公园</td>
		                                            <td class="center">公园</td>
		                                            <td class="center">张三</td>
		                                            <td class="center">禁止动火</td>
		                                            <td class="center">网络部</td>
		                                            <td class="center">行政区</td>
		                                            <td class="center">行政区</td>
		                                            <td class="text-nowrap">
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Edit"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a>
							                                    <a href="javascript:void(0)" data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
							                                </td>
		                                        </tr>
		                                    </tbody>
		                                    <!-- <tfoot>
		                                        <tr>
		                                            <th>Rendering engine</th>
		                                            <th>Browser</th>
		                                            <th>Platform(s)</th>
		                                            <th>Engine version</th>
		                                            <th>CSS grade</th>
		                                            <th>Action</th>
		                                        </tr>
		                                    </tfoot> -->
		                                </table>
		                            </div>
		                        </div>
				</div>

			</div>
		</div>
</div>

</template>

<script>
export default {
	data () {
		return {
			name: 'staff'
		}
	},
	 created () {
		$('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
		$('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus();
		$(document).ready(function() {
	    $('#editable-datatable').DataTable();
		});
	}
}
</script>

<style scoped>

</style>