const Employee = require('../models/Employee');
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage
*/
exports.homepage = async (req,res) => {
    const messages = await req.flash("info");

    const locals = {
        title: 'NodeJs',
        description: 'Employee Management System'
    }

    try {
        const employees = await Employee.find({});
        res.render('index', { locals, messages, employees } );
    } catch (error) {
        console.log(error);
    }
}


/**
 * GET /
 * About
*/
exports.about = async (req,res) => {

    const locals = {
        title: 'About',
        description: 'Employee Management System'
    }
    try {
        res.render('about', { locals });
    } catch (error) {
        console.log(error);
    }
}


/**
 * GET /
 * New Employee Form
*/
exports.addEmployee = async (req,res) => {
    const locals = {
        title: 'Add New Employee',
        description: 'Employee Management System'
    }
    res.render('employee/add', locals);
}


/**
 * POST /
 * Create new Employee
*/
exports.postEmployee = async (req,res) => {

    console.log(req.body);

    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details
    });

    try {
        await Employee.create(newEmployee);
        await req.flash('info','New employee has been added!')

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

/**
 * GET /
 * Employee Data
*/

exports.view = async (req,res) => {
    try {
        const employee = await Employee.findOne({ _id: req.params.id })

        const locals = {
            title: 'View Employee Data',
            description: 'Employee Management System'
        };
        res.render('employee/view', {
            locals,
            employee
        })
    } catch(error) {
        console.log(error);
    }
}

/**
 * GET /
 * Edit Employee Data
*/
exports.edit = async (req,res) => {
    try {
        const employee = await Employee.findOne({ _id: req.params.id })

        const locals = {
            title: 'Edit Employee Data',
            description: 'Employee Management System'
        };
        res.render('employee/edit', {
            locals,
            employee
        })
    } catch(error) {
        console.log(error);
    }
}

/**
 * GET /
 * Update Employee Data
*/
exports.editPost = async (req,res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now()
        });

        // await res.redirect(`/edit/${req.params.id}`)
        await res.redirect('/')

    } catch (error) {
        console.log(error);
    }
}

/**
 * DELETE /
 * Delete Employee Data
*/
exports.deleteEmployee = async (req,res) => {
    try {
        await Employee.deleteOne({ _id: req.params.id })
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}


/**
 * POST /
 * Search Employee Data
*/
exports.searchEmployee = async (req,res) => {
    const locals = {
        title: 'Search Employee Data',
        description: 'Employee Management System'
    };
    try { 
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

        const employees = await Employee.find({
            $or: [
                {firstName: {$regex: new RegExp(searchNoSpecialChar, "i")}},
                {lastName: {$regex: new RegExp(searchNoSpecialChar, "i")}},
            ]
        });

        res.render("search", {employees, locals})

    } catch (error) {
        console.log(error);
    }
}