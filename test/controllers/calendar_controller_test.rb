require 'test_helper'

class CalendarControllerTest < ActionDispatch::IntegrationTest
  test "should get myCalendar" do
    get calendar_myCalendar_url
    assert_response :success
  end

end
