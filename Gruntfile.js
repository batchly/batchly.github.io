module.exports = function (grunt) {

    "use strict";

    // load all modules
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    // define default tasks 
    var taskConfig = {
        
        connect: {
            server: {
                options: {
                    port: "12345",
                    hostname: "*",
                    keepalive: true,
                    base: "",
                    middleware: function (connect, options) {
                        var middlewares = [];
                        var directory = options.directory || options.base[options.base.length - 1];
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        options.base.forEach(function (base) {
                            // Serve static files.
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        middlewares.push(connect.directory(directory));

                        // Handle 404
                        middlewares.push(function (req, res, next) {
                            if (req.url.indexOf(".") === -1) {
                                res.end(grunt.file.read(directory + "/index.html"));
                            } else {
                                console.log(req.url);
                                res.end("404");
                            }
                        });

                        return middlewares;
                    },
                }
            }
        }
    };

    // Setup base config
    grunt.initConfig(taskConfig);
    
};