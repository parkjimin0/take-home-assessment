require 'test_helper'

class JiminControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get jimin_index_url
    assert_response :success
  end

end
