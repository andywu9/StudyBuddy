require 'test_helper'

class CreatePlanControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get create_plan_index_url
    assert_response :success
  end

end
