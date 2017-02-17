# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

<%# this would now only load application.css, not the whole tree %>
<%= stylesheet_link_tag :application, :media => "all" %>

<%# and this would load the controller specific file %>
<%= stylesheet_link_tag params[:controller] %>