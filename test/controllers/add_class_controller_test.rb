require 'test_helper'

class AddClassControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get add_class_add_url
    assert_response :success
  end

end
