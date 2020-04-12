package com.xuxx.vhr.utils;

import com.xuxx.vhr.model.*;
import org.apache.poi.hpsf.DocumentSummaryInformation;
import org.apache.poi.hpsf.SummaryInformation;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class POIUtils {

    public static ResponseEntity<byte[]> employeeToExcel(List<Employee> list) {
        //1.创建一个Excel文档(工作簿)
        HSSFWorkbook workbook = new HSSFWorkbook();
        //2.创建文档信息
        workbook.createInformationProperties();
        //3.获取并配置文档信息
        DocumentSummaryInformation docInfo = workbook.getDocumentSummaryInformation();
        docInfo.setCategory("Excel文件");//设置文档类别
        docInfo.setManager("Xuxx");//设置文档管理员
        docInfo.setCompany("Xuxx");//设置公司信息
        //4.获取文档摘要信息
        SummaryInformation summaryInformation = workbook.getSummaryInformation();//摘要信息
        summaryInformation.setTitle("员工信息表");//文档标题
        summaryInformation.setSubject("员工信息");//文档主题
        summaryInformation.setAuthor("Xuxx");//文档作者
        summaryInformation.setComments("员工信息表...");//文档备注
        //5.创建样式 > 创建标题行的样式
        HSSFCellStyle hssfStyle = workbook.createCellStyle();
        hssfStyle.setFillForegroundColor(IndexedColors.YELLOW.index);//设置填充前景颜色
        hssfStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);//设置填充模式
        HSSFCellStyle dateCellStyle = workbook.createCellStyle();
        dateCellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("m/d/yy"));//设置日期格式 和SimpleDateFormat的yyyy/MM/dd一样
        //6.1创建工作表(Sheet)
        HSSFSheet sheet = workbook.createSheet("员工信息表");
        sheet.setColumnWidth(0, 5 * 256);//设置列的宽度
        sheet.setColumnWidth(1, 12 * 256);
        sheet.setColumnWidth(2, 10 * 256);
        sheet.setColumnWidth(3, 5 * 256);
        sheet.setColumnWidth(4, 12 * 256);
        sheet.setColumnWidth(5, 20 * 256);
        sheet.setColumnWidth(6, 10 * 256);
        sheet.setColumnWidth(7, 10 * 256);
        sheet.setColumnWidth(8, 16 * 256);
        sheet.setColumnWidth(9, 12 * 256);
        sheet.setColumnWidth(10, 15 * 256);
        sheet.setColumnWidth(11, 20 * 256);
        sheet.setColumnWidth(12, 16 * 256);
        sheet.setColumnWidth(13, 14 * 256);
        sheet.setColumnWidth(14, 14 * 256);
        sheet.setColumnWidth(15, 12 * 256);
        sheet.setColumnWidth(16, 8 * 256);
        sheet.setColumnWidth(17, 20 * 256);
        sheet.setColumnWidth(18, 20 * 256);
        sheet.setColumnWidth(19, 15 * 256);
        sheet.setColumnWidth(20, 8 * 256);
        sheet.setColumnWidth(21, 25 * 256);
        sheet.setColumnWidth(22, 14 * 256);
        sheet.setColumnWidth(23, 15 * 256);
        sheet.setColumnWidth(24, 15 * 256);
        //6.2创建标题行 从0开始
        HSSFRow r0 = sheet.createRow(0);
        HSSFCell c0 = r0.createCell(0);
        c0.setCellValue("编号");
        c0.setCellStyle(hssfStyle);
        HSSFCell c1 = r0.createCell(1);
        c1.setCellStyle(hssfStyle);
        c1.setCellValue("姓名");
        HSSFCell c2 = r0.createCell(2);
        c2.setCellStyle(hssfStyle);
        c2.setCellValue("工号");
        HSSFCell c3 = r0.createCell(3);
        c3.setCellStyle(hssfStyle);
        c3.setCellValue("性别");
        HSSFCell c4 = r0.createCell(4);
        c4.setCellStyle(hssfStyle);
        c4.setCellValue("出生日期");
        HSSFCell c5 = r0.createCell(5);
        c5.setCellStyle(hssfStyle);
        c5.setCellValue("身份证号码");
        HSSFCell c6 = r0.createCell(6);
        c6.setCellStyle(hssfStyle);
        c6.setCellValue("婚姻状况");
        HSSFCell c7 = r0.createCell(7);
        c7.setCellStyle(hssfStyle);
        c7.setCellValue("民族");
        HSSFCell c8 = r0.createCell(8);
        c8.setCellStyle(hssfStyle);
        c8.setCellValue("籍贯");
        HSSFCell c9 = r0.createCell(9);
        c9.setCellStyle(hssfStyle);
        c9.setCellValue("政治面貌");
        HSSFCell c10 = r0.createCell(10);
        c10.setCellStyle(hssfStyle);
        c10.setCellValue("电话号码");
        HSSFCell c11 = r0.createCell(11);
        c11.setCellStyle(hssfStyle);
        c11.setCellValue("联系地址");
        HSSFCell c12 = r0.createCell(12);
        c12.setCellStyle(hssfStyle);
        c12.setCellValue("所属部门");
        HSSFCell c13 = r0.createCell(13);
        c13.setCellStyle(hssfStyle);
        c13.setCellValue("职称");
        HSSFCell c14 = r0.createCell(14);
        c14.setCellStyle(hssfStyle);
        c14.setCellValue("职位");
        HSSFCell c15 = r0.createCell(15);
        c15.setCellStyle(hssfStyle);
        c15.setCellValue("聘用形式");
        HSSFCell c16 = r0.createCell(16);
        c16.setCellStyle(hssfStyle);
        c16.setCellValue("最高学历");
        HSSFCell c17 = r0.createCell(17);
        c17.setCellStyle(hssfStyle);
        c17.setCellValue("专业");
        HSSFCell c18 = r0.createCell(18);
        c18.setCellStyle(hssfStyle);
        c18.setCellValue("毕业院校");
        HSSFCell c19 = r0.createCell(19);
        c19.setCellStyle(hssfStyle);
        c19.setCellValue("入职日期");
        HSSFCell c20 = r0.createCell(20);
        c20.setCellStyle(hssfStyle);
        c20.setCellValue("在职状态");
        HSSFCell c21 = r0.createCell(21);
        c21.setCellStyle(hssfStyle);
        c21.setCellValue("邮箱");
        HSSFCell c22 = r0.createCell(22);
        c22.setCellStyle(hssfStyle);
        c22.setCellValue("合同期限(年)");
        HSSFCell c23 = r0.createCell(23);
        c23.setCellStyle(hssfStyle);
        c23.setCellValue("合同起始日期");
        HSSFCell c24 = r0.createCell(24);
        c24.setCellStyle(hssfStyle);
        c24.setCellValue("合同终止日期");
        HSSFCell c25 = r0.createCell(25);
        c25.setCellStyle(hssfStyle);
        c25.setCellValue("转正日期");
        for (int i = 0; i < list.size(); i++) {
            Employee emp = list.get(i);
            HSSFRow row = sheet.createRow(i + 1);
            row.createCell(0).setCellValue(emp.getId());
            row.createCell(1).setCellValue(emp.getName());
            row.createCell(2).setCellValue(emp.getWorkID());
            row.createCell(3).setCellValue(emp.getGender());
            HSSFCell cell4 = row.createCell(4);
            cell4.setCellStyle(dateCellStyle);
            cell4.setCellValue(emp.getBirthday());
            row.createCell(5).setCellValue(emp.getIdCard());
            row.createCell(6).setCellValue(emp.getWedlock());
            row.createCell(7).setCellValue(emp.getNation().getName());
            row.createCell(8).setCellValue(emp.getNativePlace());
            row.createCell(9).setCellValue(emp.getPoliticsstatus().getName());
            row.createCell(10).setCellValue(emp.getPhone());
            row.createCell(11).setCellValue(emp.getAddress());
            row.createCell(12).setCellValue(emp.getDepartment().getName());
            row.createCell(13).setCellValue(emp.getJobLevel().getName());
            row.createCell(14).setCellValue(emp.getPosition().getName());
            row.createCell(15).setCellValue(emp.getEngageForm());
            row.createCell(16).setCellValue(emp.getTiptopDegree());
            row.createCell(17).setCellValue(emp.getSpecialty());
            row.createCell(18).setCellValue(emp.getSchool());
            HSSFCell cell19 = row.createCell(19);
            cell19.setCellStyle(dateCellStyle);
            cell19.setCellValue(emp.getBeginDate());
            row.createCell(20).setCellValue(emp.getWorkState());
            row.createCell(21).setCellValue(emp.getEmail());
            row.createCell(22).setCellValue(emp.getContractTerm());
            HSSFCell cell23 = row.createCell(23);
            cell23.setCellStyle(dateCellStyle);
            cell23.setCellValue(emp.getBeginContract());
            HSSFCell cell24 = row.createCell(24);
            cell24.setCellStyle(dateCellStyle);
            cell24.setCellValue(emp.getEndContract());
            HSSFCell cell25 = row.createCell(25);
            cell25.setCellStyle(dateCellStyle);
            cell25.setCellValue(emp.getConversionTime());
        }

        //文件下载
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        HttpHeaders headers = new HttpHeaders();
        try {
            workbook.write(baos);
            headers.setContentDispositionFormData("attachment", new String("员工信息表.xls".getBytes("UTF-8"), "ISO-8859-1"));
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<byte[]>(baos.toByteArray(), headers, HttpStatus.CREATED);
    }

    /**
     * 将Excel解析为员工数据集合
     *
     * @param file              上传的Excel
     * @param allNations        民族
     * @param allPoliticsstatus 政治面貌
     * @param allDepartments    部门
     * @param allPositions      职位
     * @param allJobLevels      职称
     * @return List<Employee>
     */
    public static List<Employee> excelToEmployee(MultipartFile file, List<Nation> allNations, List<Politicsstatus> allPoliticsstatus, List<Department> allDepartments, List<Position> allPositions, List<JobLevel> allJobLevels) {
        List<Employee> list = new ArrayList<>();
        Employee employee = null;
        try {
            //1.创建workbook对象
            HSSFWorkbook workbook = new HSSFWorkbook(file.getInputStream());
            //2.获取workbook中表单的数量
            int numberOfSheets = workbook.getNumberOfSheets();
            for (int i = 0; i < numberOfSheets; i++) {
                //3.获取表单
                HSSFSheet sheet = workbook.getSheetAt(i);
                //4.获取表单的行数
                int numberOfRows = sheet.getPhysicalNumberOfRows();
                for (int j = 0; j < numberOfRows; j++) {
                    //5.跳过标题行
                    if (j == 0) {
                        continue;//跳过
                    }
                    //6.获取行
                    HSSFRow row = sheet.getRow(j);
                    if (row == null) {//跳过空行
                        continue;
                    }
                    //7.获取列数
                    int cells = row.getPhysicalNumberOfCells();
                    employee = new Employee();
                    for (int k = 0; k < cells; k++) {
                        HSSFCell cell = row.getCell(k);
                        switch (cell.getCellType()) {
                            case STRING:
                                String stringCellValue = cell.getStringCellValue();
                                switch (k) {
                                    case 1:
                                        employee.setName(stringCellValue);
                                        break;
                                    case 2:
                                        employee.setWorkID(stringCellValue);
                                        break;
                                    case 3:
                                        employee.setGender(stringCellValue);
                                        break;
                                    case 5:
                                        employee.setIdCard(stringCellValue);
                                        break;
                                    case 6:
                                        employee.setWedlock(stringCellValue);
                                        break;
                                    case 7:
                                        //重写了Nation类的equals和hashCode方法，使得数组调用indexOf时，只比较传入的name即可返回下标（不用比较id和name）
                                        int nationIndex = allNations.indexOf(new Nation(stringCellValue));
                                        employee.setNationId(allNations.get(nationIndex).getId());
                                        break;
                                    case 8:
                                        employee.setNativePlace(stringCellValue);
                                        break;
                                    case 9:
                                        //重写了Politicsstatus类的equals和hashCode方法
                                        int politicsstatusIndex = allPoliticsstatus.indexOf(new Politicsstatus(stringCellValue));
                                        employee.setPoliticId(allPoliticsstatus.get(politicsstatusIndex).getId());
                                        break;
                                    case 10:
                                        employee.setPhone(stringCellValue);
                                        break;
                                    case 11:
                                        employee.setAddress(stringCellValue);
                                        break;
                                    case 12:
                                        //重写了Department类的equals和hashCode方法
                                        int departmentIndex = allDepartments.indexOf(new Department(stringCellValue));
                                        employee.setDepartmentId(allDepartments.get(departmentIndex).getId());
                                        break;
                                    case 13:
                                        //重写了JobLevel类的equals和hashCode方法
                                        int jobLevelsIndex = allJobLevels.indexOf(new JobLevel(stringCellValue));
                                        employee.setJobLevelId(allJobLevels.get(jobLevelsIndex).getId());
                                        break;
                                    case 14:
                                        //重写了Position类的equals和hashCode方法
                                        int positionIndex = allPositions.indexOf(new Position(stringCellValue));
                                        employee.setPosId(allPositions.get(positionIndex).getId());
                                        break;
                                    case 15:
                                        employee.setEngageForm(stringCellValue);
                                        break;
                                    case 16:
                                        employee.setTiptopDegree(stringCellValue);
                                        break;
                                    case 17:
                                        employee.setSpecialty(stringCellValue);
                                        break;
                                    case 18:
                                        employee.setSchool(stringCellValue);
                                        break;
                                    case 20:
                                        employee.setWorkState(stringCellValue);
                                        break;
                                    case 21:
                                        employee.setEmail(stringCellValue);
                                        break;
                                }
                                break;
                            default: {
                                switch (k) {
                                    case 4:
                                        employee.setBirthday(cell.getDateCellValue());
                                        break;
                                    case 19:
                                        employee.setBeginDate(cell.getDateCellValue());
                                        break;
                                    case 22:
                                        employee.setContractTerm(cell.getNumericCellValue());
                                    case 23:
                                        employee.setBeginContract(cell.getDateCellValue());
                                        break;
                                    case 24:
                                        employee.setEndContract(cell.getDateCellValue());
                                        break;
                                    case 25:
                                        employee.setConversionTime(cell.getDateCellValue());
                                        break;
                                }
                            }
                            break;
                        }
                    }
                    list.add(employee);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }
}
