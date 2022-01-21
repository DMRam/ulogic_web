package com.ikigai.prism.controller;

import java.util.ArrayList;
import java.util.List;

import com.ikigai.prism.bean.SampleBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin("http://localhost:3000")
public class SampleController {

    @GetMapping("/")
    public List<SampleBean> title() {
        SampleBean sampleBean = new SampleBean();

        List<SampleBean> listOfSampleBean = new ArrayList<SampleBean>();
        listOfSampleBean.add(sampleBean);

        return listOfSampleBean;
    }

}
