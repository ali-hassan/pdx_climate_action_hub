# == Schema Information
#
# Table name: unavailable_dates
#
#  id         :bigint(8)        not null, primary key
#  date       :date
#  listing_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe UnavailableDate, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
